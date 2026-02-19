import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { useTheme } from '../context';

interface ThemedTextProps extends TextProps {
    lightColor?: string;
    darkColor?: string;
}

export default function ThemeText({ style, lightColor, darkColor, ...props }: ThemedTextProps) {
    const { colors, isDark } = useTheme();
    const color = isDark ? (darkColor || colors.text) : (lightColor || colors.text);

    return (
        <Text style={[{ color }, style]} {...props} />
    );
}

const styles = StyleSheet.create({});