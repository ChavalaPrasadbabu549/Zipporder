import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface ProfileScreenProps {
    navigation?: any;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <View style={styles.avatar}>
                    <Text style={styles.avatarText}>JD</Text>
                </View>
            </View>

            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.email}>john.doe@example.com</Text>

            <View style={styles.infoContainer}>
                <View style={styles.infoCard}>
                    <Text style={styles.infoLabel}>Orders</Text>
                    <Text style={styles.infoValue}>24</Text>
                </View>
                <View style={styles.infoCard}>
                    <Text style={styles.infoLabel}>Points</Text>
                    <Text style={styles.infoValue}>1,250</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 60,
        padding: 20,
    },
    avatarContainer: {
        marginBottom: 20,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#007AFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    email: {
        fontSize: 16,
        color: '#666',
        marginBottom: 30,
    },
    infoContainer: {
        flexDirection: 'row',
        gap: 20,
        width: '100%',
    },
    infoCard: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
        borderRadius: 12,
        alignItems: 'center',
    },
    infoLabel: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    infoValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default ProfileScreen;
