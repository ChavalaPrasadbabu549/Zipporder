import React from 'react';
import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Input } from '../components';
import { useTheme } from '../context';
import ThemeText from '../components/Text';
import { CATEGORIES, MAKING_VIDEOS, OFFERS, POPULAR, REELS } from '../utils/helper';
import VideoCard from '../components/home/VideoCard';
import ReelCard from '../components/home/ReelCard';
import CategoryItem from '../components/home/CategoryItem';
import PopularItem from '../components/home/PopularItem';
import OfferCard from '../components/home/OfferCard';


export default function HomeScreen() {
    const navigation = useNavigation<any>();
    const { colors } = useTheme();

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.headerLeft}
                        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                    >
                        <View style={[styles.headerLogoPlaceholder, { backgroundColor: colors.primary }]}>
                            <Ionicons name="menu" size={24} color="#fff" />
                        </View>
                        <View>
                            <ThemeText style={[styles.locationLabel, { color: colors.textSecondary }]}>
                                Delivering to
                            </ThemeText>
                            <View style={styles.locationContainer}>
                                <ThemeText style={[styles.location, { color: colors.primary }]}>
                                    Home
                                </ThemeText>
                                <Ionicons name="chevron-down" size={16} color={colors.primary} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.profileButton}
                        onPress={() => navigation.navigate('Profile')}>
                        <Image
                            source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
                            style={styles.profileImage}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.searchContainer}>
                    <Input
                        placeholder="Search for cakes, pastries..."
                        leftIcon={<Ionicons name="search" size={20} color={colors.textSecondary} />}
                    />
                </View>

                <View style={styles.sectionHeader}>
                    <ThemeText style={styles.sectionTitle}>
                        Making in Action
                    </ThemeText>
                </View>

                <FlatList
                    data={MAKING_VIDEOS}
                    renderItem={({ item }) => <VideoCard item={item} />}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.videoList}
                />

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.offersContainer}
                    contentContainerStyle={styles.offersContent}>
                    {OFFERS.map((offer) => (
                        <OfferCard key={offer.id} offer={offer} />
                    ))}
                </ScrollView>

                <View style={styles.sectionHeader}>
                    <ThemeText style={styles.sectionTitle}>
                        Categories
                    </ThemeText>
                    <TouchableOpacity onPress={() => console.log('See all categories')}>
                        <ThemeText style={[styles.seeAll, { color: colors.primary }]}>See All</ThemeText>
                    </TouchableOpacity>
                </View>

                <View style={styles.categoriesGrid}>
                    {CATEGORIES.map((item) => (
                        <View key={item.id} style={styles.categoryItemWrapper}>
                            <CategoryItem
                                item={item}
                                onPress={() => console.log('Navigate to category', item.name)}
                            />
                        </View>
                    ))}
                </View>

                <View style={styles.sectionHeader}>
                    <ThemeText style={styles.sectionTitle}>
                        Popular Now
                    </ThemeText>
                    <TouchableOpacity onPress={() => console.log('See all popular')}>
                        <ThemeText style={[styles.seeAll, { color: colors.primary }]}>See All</ThemeText>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={POPULAR}
                    renderItem={({ item }) => (
                        <PopularItem
                            item={item}
                            onPress={() => console.log('Navigate to product', item.id)}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.popularList}
                />

                <View style={styles.sectionHeader}>
                    <ThemeText style={styles.sectionTitle}>
                        Instagram Reels
                    </ThemeText>
                </View>

                <FlatList
                    data={REELS}
                    renderItem={({ item }) => <ReelCard item={item} />}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.reelList}
                />

            </ScrollView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    locationLabel: {
        fontSize: 12,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    location: {
        fontSize: 16,
        fontWeight: '700',
        marginRight: 4,
    },
    profileButton: {
        padding: 4,
    },
    profileImage: {
        width: 36,
        height: 36,
        borderRadius: 18,
    },
    searchContainer: {
        paddingHorizontal: 16,
        marginVertical: 12,
    },
    videoList: {
        paddingHorizontal: 16,
        paddingBottom: 24,
    },
    offersContainer: {
        marginBottom: 24,
    },
    offersContent: {
        paddingHorizontal: 16,
        gap: 16,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
    },
    seeAll: {
        fontSize: 14,
        fontWeight: '600',
    },
    categoriesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 8,
        justifyContent: 'space-between',
    },
    categoryItemWrapper: {
        width: '33.33%',
        padding: 8,
        alignItems: 'center',
    },
    popularList: {
        paddingHorizontal: 16,
        gap: 16,
        paddingBottom: 24,
    },
    reelList: {
        paddingHorizontal: 16,
        gap: 12,
        paddingBottom: 24,
    },
});
