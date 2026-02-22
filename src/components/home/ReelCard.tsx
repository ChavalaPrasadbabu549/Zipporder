import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ReelCardProps {
    item: {
        id: string;
        title: string;
        views: string;
        thumbnail: string;
        link: string;
    };
}

const ReelCard: React.FC<ReelCardProps> = ({ item }) => {
    return (
        <TouchableOpacity style={styles.reelCard} onPress={() => Linking.openURL(item.link)}>
            <Image
                source={{ uri: item.thumbnail }}
                style={styles.reelImage}
                resizeMode="cover"
            />
            <View style={styles.playButtonOverlay}>
                <Ionicons name="play" size={32} color="rgba(255,255,255,0.8)" />
            </View>
            <View style={styles.reelOverlay}>
                <Text style={styles.reelTitle}>{item.title}</Text>
                <View style={styles.viewsBadge}>
                    <Ionicons name="play" size={10} color="#fff" />
                    <Text style={styles.viewsText}>{item.views}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    reelCard: {
        width: 120,
        height: 213,
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: '#000',
        position: 'relative',
    },
    reelImage: {
        width: '100%',
        height: '100%',
        opacity: 0.9,
    },
    playButtonOverlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    reelOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 8,
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    reelTitle: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '700',
        marginBottom: 4,
    },
    viewsBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    viewsText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: '600',
    },
});

export default ReelCard;
