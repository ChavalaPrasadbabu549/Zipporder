import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import TabNavigator from './TabNavigator';
import ThemedText from '../components/Text';
import { DrawerParamList } from './types';
import { useAuth, useTheme } from '../context';

const Drawer = createDrawerNavigator<DrawerParamList>();
function CustomDrawerContent(props: any) {
    const { colors, toggleTheme, isDark } = useTheme();
    const { logout, user } = useAuth();

    return (
        <DrawerContentScrollView
            {...props}
            contentContainerStyle={{ flex: 1, backgroundColor: colors.background }}
        >
            <View style={[styles.drawerHeader, { borderBottomColor: colors.border }]}>
                <View style={[styles.avatar, { backgroundColor: colors.primary }]}>
                    <ThemedText style={styles.avatarText}>
                        {user?.name ? user.name.charAt(0).toUpperCase() : 'JD'}
                    </ThemedText>
                </View>
                <ThemedText style={styles.name}>{user?.name || 'John Doe'}</ThemedText>
                <ThemedText style={styles.email}>{user?.email || 'john.doe@example.com'}</ThemedText>
            </View>

            <View style={{ flex: 1, paddingTop: 10 }}>
                <DrawerItemList {...props} />
                <DrawerItem
                    label={isDark ? "Light Mode" : "Dark Mode"}
                    icon={({ color, size }) => (
                        <Ionicons
                            name={isDark ? "sunny-outline" : "moon-outline"}
                            size={size}
                            color={color}
                        />
                    )}
                    onPress={toggleTheme}
                    labelStyle={{ color: colors.text }}
                    inactiveTintColor={colors.text}
                />
            </View>

            <View style={[styles.drawerFooter, { borderTopColor: colors.border }]}>
                <DrawerItem
                    label="Sign Out"
                    icon={({ color, size }) => <Ionicons name="log-out-outline" size={size} color={color} />}
                    onPress={() => {
                        logout();
                        // RootNavigator will handle navigation change via isAuthenticated state
                    }}
                    labelStyle={{ color: colors.text }}
                    inactiveTintColor={colors.text}
                />
            </View>
        </DrawerContentScrollView>
    );
}

export default function DrawerNavigator() {
    const { colors } = useTheme();

    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: colors.background,
                    width: '80%',
                },
                drawerActiveTintColor: colors.primary,
                drawerInactiveTintColor: colors.text,
                drawerType: 'front',
            }}
        >
            <Drawer.Screen
                name="MainTabs"
                component={TabNavigator}
                options={{
                    drawerLabel: 'Home',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    drawerHeader: {
        padding: 20,
        borderBottomWidth: 1,
        marginBottom: 10,
        paddingTop: 50,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    avatarText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    email: {
        fontSize: 14,
        opacity: 0.6,
    },
    drawerFooter: {
        borderTopWidth: 1,
        paddingVertical: 10,
        paddingBottom: 20,
    },
});
