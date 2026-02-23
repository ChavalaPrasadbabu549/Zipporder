import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import { useAppSelector } from '../redux';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {!isAuthenticated ?
                <Stack.Screen name="Auth" component={AuthNavigator} options={{ animationTypeForReplace: 'pop' }} />
                : <Stack.Screen name="Main" component={DrawerNavigator} />}
        </Stack.Navigator>
    );
};

export default RootNavigator;
