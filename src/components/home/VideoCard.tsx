import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useVideoPlayer, VideoView } from 'expo-video';
import { VideoCardProps } from '../../types';

const VideoCard: React.FC<VideoCardProps> = ({ item }) => {
    const player = useVideoPlayer(item.video, player => {
        player.loop = true;
        player.muted = false;
        player.volume = 1.0;
    });

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);

    // Update current time as video plays
    useEffect(() => {
        const subscription = player.addListener('timeUpdate', (event) => {
            setCurrentTime(event.currentTime);
        });

        return () => {
            subscription.remove();
        };
    }, [player]);

    // Helper to format seconds to MM:SS
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };
    const [min, sec] = item.duration.split(':').map(Number);
    const totalDurationInSeconds = min * 60 + sec;
    const remainingSeconds = Math.max(0, totalDurationInSeconds - currentTime);
    const displayDuration = isPlaying ? formatTime(remainingSeconds) : item.duration;


    const togglePlay = () => {
        if (isPlaying) {
            player.pause();
        } else {
            player.muted = false;
            player.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <View style={styles.videoCard}>
            <TouchableOpacity onPress={togglePlay} activeOpacity={0.9} style={styles.touchableArea}>
                {!isPlaying && (
                    <Image
                        source={{ uri: item.thumbnail }}
                        style={StyleSheet.absoluteFill}
                        resizeMode="cover"
                    />
                )}
                <VideoView
                    style={isPlaying ? styles.videoContent : styles.hiddenVideo}
                    player={player}
                    nativeControls={false}
                    contentFit="cover"
                />

                {!isPlaying && (
                    <View style={styles.playButtonOverlay}>
                        <Ionicons name="play-circle" size={48} color="rgba(255,255,255,0.8)" />
                    </View>
                )}

                <View style={styles.videoOverlayStatic}>
                    <Text style={styles.videoTitle}>{item.title}</Text>
                    <Text style={styles.videoDuration}>{displayDuration}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    videoCard: {
        width: 200,
        height: 300,
        borderRadius: 20,
        overflow: 'hidden',
        position: 'relative',
        marginRight: 16,
    },
    touchableArea: {
        flex: 1,
    },
    videoContent: {
        width: '100%',
        height: '100%',
    },
    hiddenVideo: {
        width: 0,
        height: 0,
    },
    playButtonOverlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    videoOverlayStatic: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 12,
        backgroundColor: 'rgba(0,0,0,0.4)',
        zIndex: 2,
    },
    videoTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 4,
    },
    videoDuration: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 12,
        fontWeight: '600',
    },
});

export default VideoCard;
