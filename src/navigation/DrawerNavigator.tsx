import React from 'react';
import { View, StyleSheet, Switch } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import TabNavigator from './TabNavigator';
import ThemedText from '../components/Text';
import { DrawerParamList } from './types';
import { useAuth, useTheme } from '../context';
import { OrdersScreen, ProfileScreen, SettingsScreen } from '../screens';

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
                {/* Home Item */}
                <DrawerItem
                    label="Home"
                    icon={({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />}
                    onPress={() => props.navigation.navigate('MainTabs', { screen: 'Home' })}
                    focused={props.state.index === 0 && (props.state.routes[0].state?.index === 0 || !props.state.routes[0].state)}
                    activeTintColor={colors.primary}
                    inactiveTintColor={colors.text}
                />
                {/* Orders Item */}
                <DrawerItem
                    label="Orders"
                    icon={({ color, size }) => <Ionicons name="list-outline" size={size} color={color} />}
                    onPress={() => props.navigation.navigate('MainTabs', { screen: 'Orders' })}
                    focused={props.state.index === 0 && props.state.routes[0].state?.index === 1}
                    activeTintColor={colors.primary}
                    inactiveTintColor={colors.text}
                />
                {/* Profile Item */}
                <DrawerItem
                    label="Profile"
                    icon={({ color, size }) => <Ionicons name="person-outline" size={size} color={color} />}
                    onPress={() => props.navigation.navigate('MainTabs', { screen: 'Profile' })}
                    focused={props.state.index === 0 && props.state.routes[0].state?.index === 2}
                    activeTintColor={colors.primary}
                    inactiveTintColor={colors.text}
                />

                <View style={{ height: 1, backgroundColor: colors.border, marginVertical: 8, opacity: 0.5, marginHorizontal: 16 }} />

                <DrawerItemList {...props} />
                <View style={[styles.drawerItem, { paddingHorizontal: 16, paddingVertical: 12 }]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                        <Ionicons
                            name={isDark ? "sunny-outline" : "moon-outline"}
                            size={24}
                            color={colors.text}
                        />
                        <ThemedText style={{ color: colors.text, marginLeft: 32, fontSize: 14, fontWeight: '500' }}>
                            {isDark ? "Light Mode" : "Dark Mode"}
                        </ThemedText>
                    </View>
                    <Switch
                        value={isDark}
                        onValueChange={toggleTheme}
                        trackColor={{ false: '#767577', true: colors.primary }}
                        thumbColor={isDark ? '#f4f3f4' : '#f4f3f4'}
                    />
                </View>
            </View>

            <View style={[styles.drawerFooter, { borderTopColor: colors.border }]}>
                <DrawerItem
                    label="Sign Out"
                    icon={({ color, size }) => <Ionicons name="log-out-outline" size={size} color={color} />}
                    onPress={() => {
                        logout();
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
                headerStyle: {
                    backgroundColor: colors.background,
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 1,
                    borderBottomColor: colors.border,
                },
                headerTitleStyle: {
                    color: colors.text,
                    fontWeight: 'bold',
                },
                headerTintColor: colors.text,
            }}
        >
            <Drawer.Screen
                name="MainTabs"
                component={TabNavigator}
                options={{
                    drawerItemStyle: { display: 'none' },
                    headerShown: false,
                }}
            />
            <Drawer.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    drawerLabel: 'Settings',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="settings-outline" size={size} color={color} />
                    ),
                    headerShown: true,
                    headerTitle: 'Settings',
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
    drawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
