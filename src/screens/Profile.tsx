import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../context';

interface ProfileScreenProps {
    navigation?: any;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation: propNav }) => {
    const navigation = useNavigation<any>();
    const { colors, isDark } = useTheme();

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]} edges={['top', 'bottom']}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.headerLeft}
                    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                >
                    <View style={[styles.headerLogoPlaceholder, { backgroundColor: colors.primary }]}>
                        <Ionicons name="menu" size={24} color="#fff" />
                    </View>
                    <Text style={[styles.headerTitle, { color: colors.text }]}>My Profile</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <View style={styles.avatarContainer}>
                    <View style={[styles.avatar, { backgroundColor: colors.primary }]}>
                        <Text style={styles.avatarText}>JD</Text>
                    </View>
                </View>

                <Text style={[styles.name, { color: colors.text }]}>John Doe</Text>
                <Text style={[styles.email, { color: colors.textSecondary }]}>john.doe@example.com</Text>

                <View style={styles.infoContainer}>
                    <View style={[styles.infoCard, { backgroundColor: isDark ? '#1E1E1E' : '#f5f5f5' }]}>
                        <Text style={[styles.infoLabel, { color: colors.textSecondary }]}>Orders</Text>
                        <Text style={[styles.infoValue, { color: colors.text }]}>24</Text>
                    </View>
                    <View style={[styles.infoCard, { backgroundColor: isDark ? '#1E1E1E' : '#f5f5f5' }]}>
                        <Text style={[styles.infoLabel, { color: colors.textSecondary }]}>Points</Text>
                        <Text style={[styles.infoValue, { color: colors.text }]}>1,250</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 8,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    headerLogoPlaceholder: {
        width: 40,
        height: 40,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
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
