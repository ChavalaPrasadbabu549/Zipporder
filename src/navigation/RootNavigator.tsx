import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import { useAuth } from '../context';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
    const { isAuthenticated } = useAuth();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {!isAuthenticated ?
                <Stack.Screen name="Auth" component={AuthNavigator} options={{ animationTypeForReplace: 'pop' }} />
                : <Stack.Screen name="Main" component={DrawerNavigator} />}
        </Stack.Navigator>
    );
};

export default RootNavigator;
