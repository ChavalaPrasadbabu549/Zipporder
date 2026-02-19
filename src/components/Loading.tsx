import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import { LoadingProps } from '../types';

const Loading: React.FC<LoadingProps> = ({
    size = 'large',
    color = '#007AFF',
    text
}) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={size} color={color} />
            {text && <Text style={styles.text}>{text}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    text: {
        marginTop: 12,
        fontSize: 16,
        color: '#666',
    },
});

export default Loading;
