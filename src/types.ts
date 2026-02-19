import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TextInputProps, ViewStyle, TextStyle } from 'react-native';

//  ===== Navigation Types   =====
export * from './navigation/types';

//  ===== Input Interfaces   =====
export interface InputProps extends TextInputProps {
    label?: string;
    error?: string;
    containerStyle?: ViewStyle;
    inputStyle?: TextStyle;
    labelStyle?: TextStyle;
    errorStyle?: TextStyle;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    required?: boolean;
}

//  ===== Select Interfaces   =====
export interface SelectOption {
    label: string;
    value: string | number;
}

export interface SelectProps {
    label?: string;
    placeholder?: string;
    options: SelectOption[];
    value?: string | number;
    onSelect: (value: string | number) => void;
    error?: string;
    containerStyle?: ViewStyle;
    selectStyle?: ViewStyle;
    labelStyle?: TextStyle;
    errorStyle?: TextStyle;
    required?: boolean;
    disabled?: boolean;
}

//  ===== Button Interfaces   =====
export interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    disabled?: boolean;
    style?: ViewStyle;
}

//  ===== Form Interfaces   =====
export interface FormFieldConfig {
    name: string;
    label: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'password' | 'number';
    icon?: keyof typeof Ionicons.glyphMap;
    required?: boolean;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}
//  ===== Card Interfaces   =====
export interface CardProps {
    title?: string;
    children: React.ReactNode;
    style?: ViewStyle;
}

//  ===== Loading Interfaces   =====
export interface LoadingProps {
    size?: 'small' | 'large';
    color?: string;
    text?: string;
}

//  ===== Hook Interfaces   =====
export interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: Error | null;
}

export interface ToggleHook {
    value: boolean;
    toggle: () => void;
    setTrue: () => void;
    setFalse: () => void;
}

//  ===== Context & Model Interfaces   =====
export interface User {
    id: string;
    name: string;
    email: string;
}

export interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string) => Promise<void>;
    logout: () => void;
}

export interface AuthProviderProps {
    children: React.ReactNode;
}

//  ===== Utility Interfaces   =====
export interface PasswordValidationResult {
    isValid: boolean;
    message: string;
}

//  ===== Data Models   =====
export interface Order {
    id: string;
    title: string;
    date: string;
    status: 'pending' | 'delivered' | 'cancelled';
    amount: string;
}
