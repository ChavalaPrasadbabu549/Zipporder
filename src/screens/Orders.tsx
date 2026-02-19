import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Order } from '../types';

const OrdersScreen: React.FC = () => {
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
        <View style={styles.container}>
            <Text style={styles.header}>My Orders</Text>
            <ScrollView style={styles.scrollView}>
                {orders.map((order) => (
                    <View key={order.id} style={styles.orderCard}>
                        <View style={styles.orderHeader}>
                            <Text style={styles.orderTitle}>{order.title}</Text>
                            <Text style={styles.orderAmount}>{order.amount}</Text>
                        </View>
                        <View style={styles.orderFooter}>
                            <Text style={styles.orderDate}>{order.date}</Text>
                            <View style={[styles.statusBadge, { backgroundColor: getStatusColor(order.status) }]}>
                                <Text style={styles.statusText}>{order.status.toUpperCase()}</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: 60,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        paddingHorizontal: 20,
        marginBottom: 20,
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
});

export default OrdersScreen;
