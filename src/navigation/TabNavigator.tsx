import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { MainTabParamList } from './types';
import { useTheme } from '../context';
import HomeScreen from '../screens/Home';
import OrdersScreen from '../screens/Orders';
import ProfileScreen from '../screens/Profile';

const Tab = createBottomTabNavigator<MainTabParamList>();

const TabNavigator: React.FC = () => {
    const { colors, isDark } = useTheme();

    return (
        <Tab.Navigator
            screenOptions={({ route, navigation }) => ({
                headerShown: true,
                headerStyle: {
                    backgroundColor: colors.background,
                    shadowColor: 'transparent',
                    elevation: 0,
                    borderBottomWidth: 1,
                    borderBottomColor: isDark ? '#333' : '#E4E4E4',
                },
                headerTitleStyle: {
                    color: colors.text,
                    fontWeight: 'bold',
                },
                headerLeft: () => (
                    <Ionicons
                        name="menu-outline"
                        size={28}
                        color={colors.text}
                        style={{ marginLeft: 16 }}
                        onPress={() => {
                            // Ensure drawer exists before opening to avoid crash
                            // navigation.openDrawer(); only works if drawer is present
                            // For now, we just log or alert if no drawer
                            if ((navigation as any).openDrawer) {
                                (navigation as any).openDrawer();
                            } else {
                                console.warn("No drawer navigator found");
                            }
                        }}
                    />
                ),
                tabBarStyle: {
                    backgroundColor: colors.background,
                    borderTopColor: isDark ? '#333' : '#E4E4E4',
                    height: 60,
                    paddingBottom: 8,
                    paddingTop: 8,
                },
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: isDark ? '#FFFFFF80' : '#25252580',
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                },
                tabBarIcon: ({ color, size }) => {
                    let iconName: any = 'home-outline';
                    if (route.name === 'Home') iconName = 'home-outline';
                    if (route.name === 'Orders') iconName = 'list-outline';
                    if (route.name === 'Profile') iconName = 'person-outline';

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
            <Tab.Screen name="Orders" component={OrdersScreen} options={{ title: 'Orders' }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
