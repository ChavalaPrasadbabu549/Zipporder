import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Card from '../Card';
import ThemeText from '../Text';
import { useTheme } from '../../context';

interface PopularItemProps {
    item: {
        id: string;
        name: string;
        price: string;
        rating: string;
        image: string;
    };
    onPress: () => void;
}

const PopularItem: React.FC<PopularItemProps> = ({ item, onPress }) => {
    const { colors } = useTheme();

    return (
        <Card style={styles.popularCard} >
            <TouchableOpacity onPress={onPress}>
                <Image source={{ uri: item.image }} style={styles.popularImage} />
                <View style={styles.popularContent}>
                    <ThemeText style={styles.popularName} numberOfLines={1}>
                        {item.name}
                    </ThemeText>
                    <View style={styles.popularFooter}>
                        <ThemeText style={[styles.popularPrice, { color: colors.primary }]}>
                            {item.price}
                        </ThemeText>
                        <View style={styles.ratingContainer}>
                            <Ionicons name="star" size={12} color="#F59E0B" />
                            <ThemeText style={styles.ratingText}>
                                {item.rating}
                            </ThemeText>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </Card>
    );
};

const styles = StyleSheet.create({
    popularCard: {
        width: 160,
        padding: 0,
        borderRadius: 16,
    },
    popularImage: {
        width: '100%',
        height: 120,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    popularContent: {
        padding: 12,
    },
    popularName: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 4,
    },
    popularFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    popularPrice: {
        fontSize: 14,
        fontWeight: '700',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    ratingText: {
        fontSize: 12,
        fontWeight: '600',
    },
});

export default PopularItem;
