import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../context';
import { Order } from '../types';

const OrdersScreen: React.FC = () => {
    const navigation = useNavigation();
    const { colors, isDark } = useTheme();
    const orders: Order[] = [
        { id: '1', title: 'Order #1234', date: '2026-02-10', status: 'delivered', amount: '$45.99' },
        { id: '2', title: 'Order #1235', date: '2026-02-12', status: 'pending', amount: '$32.50' },
        { id: '3', title: 'Order #1236', date: '2026-02-13', status: 'pending', amount: '$78.20' },
    ];

    const getStatusColor = (status: Order['status']) => {
        switch (status) {
            case 'delivered':
                return '#4CAF50';
            case 'pending':
                return '#FF9800';
            case 'cancelled':
                return '#F44336';
            default:
                return '#999';
        }
    };

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
                    <Text style={[styles.headerTitle, { color: colors.text }]}>My Orders</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ padding: 20 }}
            >
                {orders.map((order) => (
                    <View key={order.id} style={[styles.orderCard, { backgroundColor: isDark ? '#1E1E1E' : '#FFFFFF' }]}>
                        <View style={styles.orderHeader}>
                            <Text style={[styles.orderTitle, { color: colors.text }]}>{order.title}</Text>
                            <Text style={styles.orderAmount}>{order.amount}</Text>
                        </View>
                        <View style={styles.orderFooter}>
                            <Text style={[styles.orderDate, { color: colors.textSecondary }]}>{order.date}</Text>
                            <View style={[styles.statusBadge, { backgroundColor: getStatusColor(order.status) }]}>
                                <Text style={styles.statusText}>{order.status.toUpperCase()}</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    scrollView: {
        flex: 1,
        paddingHorizontal: 20,
    },
    orderCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    orderHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    orderTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    orderAmount: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007AFF',
    },
    orderFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    orderDate: {
        fontSize: 14,
        color: '#666',
    },
    statusBadge: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
    },
    statusText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#fff',
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
});

export default OrdersScreen;
