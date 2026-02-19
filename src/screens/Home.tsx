import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context';

interface HomeScreenProps {
    navigation?: any;
}

const HomeScreen: React.FC<HomeScreenProps> = () => {
    const { isDark, toggleTheme, colors } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <StatusBar style={isDark ? "light" : "dark"} />

            <View style={styles.header}>
                <TouchableOpacity onPress={toggleTheme} style={styles.themeButton}>
                    <Ionicons
                        name={isDark ? "sunny" : "moon"}
                        size={50}
                        color={colors.text}
                    />
                </TouchableOpacity>
            </View>

            <Text style={[styles.title, { color: colors.text }]}>Welcome to Zipporder</Text>
            <Text style={[styles.subtitle, { color: colors.textSecondary }]}>Home Screen</Text>

            <TouchableOpacity style={[styles.button, { backgroundColor: colors.primary }]}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    header: {
        position: 'absolute',
        top: 50,
        right: 20,
        zIndex: 1,
    },
    themeButton: {
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 30,
        textAlign: 'center',
    },
    button: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default HomeScreen;
