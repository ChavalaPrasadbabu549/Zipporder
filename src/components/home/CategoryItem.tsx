import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ThemeText from '../Text';

interface CategoryItemProps {
    item: {
        id: string;
        name: string;
        image: string;
    };
    onPress: () => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ item, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.categoryInfo}
            onPress={onPress}
        >
            <View style={styles.categoryImageContainer}>
                <Image source={{ uri: item.image }} style={styles.categoryImage} />
            </View>
            <ThemeText style={styles.categoryName} numberOfLines={1}>{item.name}</ThemeText>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    categoryInfo: {
        alignItems: 'center',
        width: '100%',
    },
    categoryImageContainer: {
        width: '100%',
        aspectRatio: 1,
        borderRadius: 16,
        backgroundColor: '#f0f0f0',
        marginBottom: 8,
        overflow: 'hidden',
    },
    categoryImage: {
        width: '100%',
        height: '100%',
    },
    categoryName: {
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
    },
});

export default CategoryItem;
