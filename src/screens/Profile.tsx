import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../context';
import { useAppSelector } from '../redux';

interface ProfileScreenProps {
    navigation?: any;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation: propNav }) => {
    const navigation = useNavigation<any>();
    const { colors, isDark } = useTheme();
    const { user } = useAppSelector((state: any) => state.auth);

    const displayName = user?.email?.split('@')[0] || 'Guest';
    const initials = displayName.substring(0, 2).toUpperCase();

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
                        <Text style={styles.avatarText}>{initials}</Text>
                    </View>
                </View>

                <Text style={[styles.name, { color: colors.text }]}>{displayName}</Text>
                <Text style={[styles.email, { color: colors.textSecondary }]}>{user?.email || 'N/A'}</Text>

                <View style={styles.infoContainer}>
                    <View style={[styles.infoCard, { backgroundColor: isDark ? '#1E1E1E' : '#f5f5f5' }]}>
                        <Ionicons name="call-outline" size={20} color={colors.primary} style={{ marginBottom: 4 }} />
                        <Text style={[styles.infoLabel, { color: colors.textSecondary }]}>Phone</Text>
                        <Text style={[styles.infoValue, { color: colors.text }]}>{user?.phone_number || 'N/A'}</Text>
                    </View>
                    <View style={[styles.infoCard, { backgroundColor: isDark ? '#1E1E1E' : '#f5f5f5' }]}>
                        <Ionicons name="location-outline" size={20} color={colors.primary} style={{ marginBottom: 4 }} />
                        <Text style={[styles.infoLabel, { color: colors.textSecondary }]}>Location</Text>
                        <Text style={[styles.infoValue, { color: colors.text }]}>{user?.location || 'N/A'}</Text>
                    </View>
                </View>

                <View style={[styles.detailRow, { borderBottomColor: isDark ? '#333' : '#eee' }]}>
                    <Ionicons name="calendar-outline" size={20} color={colors.primary} />
                    <Text style={[styles.detailLabel, { color: colors.textSecondary }]}>Date of Birth</Text>
                    <Text style={[styles.detailValue, { color: colors.text }]}>
                        {user?.dob ? new Date(user.dob).toLocaleDateString() : 'N/A'}
                    </Text>
                </View>

                <View style={[styles.detailRow, { borderBottomColor: isDark ? '#333' : '#eee' }]}>
                    <Ionicons name="time-outline" size={20} color={colors.primary} />
                    <Text style={[styles.detailLabel, { color: colors.textSecondary }]}>Member Since</Text>
                    <Text style={[styles.detailValue, { color: colors.text }]}>
                        {user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}
                    </Text>
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
        marginBottom: 5,
    },
    email: {
        fontSize: 16,
        marginBottom: 30,
    },
    infoContainer: {
        flexDirection: 'row',
        gap: 20,
        width: '100%',
        marginBottom: 24,
    },
    infoCard: {
        flex: 1,
        padding: 20,
        borderRadius: 12,
        alignItems: 'center',
    },
    infoLabel: {
        fontSize: 14,
        marginBottom: 8,
    },
    infoValue: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    detailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 16,
        borderBottomWidth: 1,
        gap: 12,
    },
    detailLabel: {
        flex: 1,
        fontSize: 14,
    },
    detailValue: {
        fontSize: 14,
        fontWeight: '600',
    },
});

export default ProfileScreen;
