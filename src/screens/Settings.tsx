import React from 'react';
import { View, StyleSheet, Switch } from 'react-native';
import ThemedText from '../components/Text';
import { useTheme } from '../context';

const SettingsScreen: React.FC = () => {
    const { colors, toggleTheme, isDark } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={[styles.section, { borderBottomColor: colors.border }]}>
                <ThemedText style={styles.sectionTitle}>Appearance</ThemedText>
                <View style={styles.row}>
                    <ThemedText>Dark Mode</ThemedText>
                    <Switch
                        value={isDark}
                        onValueChange={toggleTheme}
                        trackColor={{ false: '#767577', true: colors.primary }}
                        thumbColor={isDark ? '#f4f3f4' : '#f4f3f4'}
                    />
                </View>
            </View>

            <View style={[styles.section, { borderBottomColor: colors.border }]}>
                <ThemedText style={styles.sectionTitle}>Notifications</ThemedText>
                <View style={styles.row}>
                    <ThemedText>Push Notifications</ThemedText>
                    <Switch value={true} />
                </View>
            </View>

            <View style={[styles.section, { borderBottomColor: colors.border }]}>
                <ThemedText style={styles.sectionTitle}>Account</ThemedText>
                <ThemedText style={styles.link}>Change Password</ThemedText>
                <ThemedText style={styles.link}>Privacy Policy</ThemedText>
                <ThemedText style={styles.link}>Terms of Service</ThemedText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    section: {
        marginBottom: 30,
        borderBottomWidth: 1,
        paddingBottom: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        opacity: 0.7,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    link: {
        paddingVertical: 12,
        color: '#007AFF',
    },
});

export default SettingsScreen;
