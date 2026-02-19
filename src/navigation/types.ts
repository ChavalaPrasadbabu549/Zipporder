import { NavigatorScreenParams } from '@react-navigation/native';

// Auth Stack Navigation Types
export type AuthStackParamList = {
    Login: undefined;
    Register: undefined;
    ForgotPassword: undefined;
};

// Main Tab Navigation Types
export type MainTabParamList = {
    Home: undefined;
    Orders: undefined;
    Profile: undefined;
};

// Drawer Navigation Types
export type DrawerParamList = {
    MainTabs: NavigatorScreenParams<MainTabParamList>;
    Settings: undefined;
};

// Root Stack Navigation Types
export type RootStackParamList = {
    Auth: NavigatorScreenParams<AuthStackParamList>;
    Main: NavigatorScreenParams<DrawerParamList>;
};

// Declare global navigation types for TypeScript
declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}
