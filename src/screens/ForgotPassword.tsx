import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../navigation/types';
import { DynamicForm, Button } from '../components';
import { forgotPasswordFields, validateForm } from '../utils';
import ThemeText from '../components/Text';
import { useTheme } from '../context';

type ForgotPasswordScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'ForgotPassword'>;
interface ForgotPasswordScreenProps {
    navigation: ForgotPasswordScreenNavigationProp;
}
const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = ({ navigation }) => {
    const [formValues, setFormValues] = useState<Record<string, string>>({
        email: '',
    });
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);
    const { colors } = useTheme();

    const handleFieldChange = (name: string, value: string) => {
        setFormValues(prev => ({ ...prev, [name]: value }));
        if (formErrors[name]) {
            setFormErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleResetPassword = async () => {
        const errors = validateForm(formValues, forgotPasswordFields);
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        setFormErrors({});
        setLoading(true);

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 2000));

            Alert.alert(
                'Reset Email Sent',
                'If an account exists with this email, you will receive password reset instructions.',
                [{ text: 'OK', onPress: () => navigation.goBack() }]
            );
        } catch (error) {
            Alert.alert('Error', 'Failed to send reset email. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
                style={styles.container}
            >
                <View style={styles.content}>
                    <ThemeText style={styles.title}>Forgot Password?</ThemeText>
                    <ThemeText style={[styles.subtitle, { color: colors.textSecondary }]}>
                        Enter your email address and we'll send you instructions to reset your password.
                    </ThemeText>

                    <DynamicForm
                        fields={forgotPasswordFields}
                        values={formValues}
                        errors={formErrors}
                        onChange={handleFieldChange}
                    />

                    <View style={styles.buttonContainer}>
                        <Button
                            title={loading ? "Sending..." : "Send Reset Link"}
                            onPress={handleResetPassword}
                            disabled={loading}
                            style={{ backgroundColor: colors.primary, marginBottom: 16 }}
                        />

                        <Button
                            title="Back to Login"
                            onPress={() => navigation.goBack()}
                            variant="outline"
                            style={{ borderColor: colors.primary }}
                            textStyle={{ color: colors.primary }}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 32,
        lineHeight: 24,
    },
    buttonContainer: {
        marginTop: 24,
        gap: 16,
    },

});

export default ForgotPasswordScreen;
