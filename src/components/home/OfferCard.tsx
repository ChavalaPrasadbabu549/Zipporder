import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

interface OfferCardProps {
    offer: {
        id: string;
        title: string;
        subtitle: string;
        color: string;
        image: string;
    };
}

const OfferCard: React.FC<OfferCardProps> = ({ offer }) => {
    return (
        <View
            style={[
                styles.offerCard,
                { backgroundColor: offer.color },
            ]}>
            <View style={styles.offerTextContainer}>
                <Text style={styles.offerTitle}>{offer.title}</Text>
                <Text style={styles.offerSubtitle}>{offer.subtitle}</Text>
                <View style={styles.shopNowButton}>
                    <Text style={[styles.shopNowText, { color: offer.color }]}>
                        Shop Now
                    </Text>
                </View>
            </View>
            <Image source={{ uri: offer.image }} style={styles.offerImage} />
        </View>
    );
};

const styles = StyleSheet.create({
    offerCard: {
        width: width - 80,
        height: 140,
        borderRadius: 16,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        overflow: 'hidden',
    },
    offerTextContainer: {
        flex: 1,
        justifyContent: 'center',
        zIndex: 1,
    },
    offerTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '800',
    },
    offerSubtitle: {
        color: 'rgba(255,255,255,0.9)',
        fontSize: 14,
        marginBottom: 12,
    },
    shopNowButton: {
        backgroundColor: '#fff',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        alignSelf: 'flex-start',
    },
    shopNowText: {
        fontSize: 12,
        fontWeight: '700',
    },
    offerImage: {
        position: 'absolute',
        right: -20,
        bottom: -20,
        width: 140,
        height: 140,
        borderRadius: 70,
    },
});

export default OfferCard;
