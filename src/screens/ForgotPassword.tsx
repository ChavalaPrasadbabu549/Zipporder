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
import { DynamicForm } from '../components';
import { forgotPasswordFields } from '../utils';
import ThemeText from '../components/Text';
import { useTheme } from '../context';
import { isValidEmail } from '../utils/validators';
import { TouchableOpacity, ActivityIndicator } from 'react-native';

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
        // Validate email
        if (!formValues.email) {
            setFormErrors({ email: 'Email is required' });
            return;
        }

        if (!isValidEmail(formValues.email)) {
            setFormErrors({ email: 'Please enter a valid email address' });
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
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
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
                        <TouchableOpacity
                            style={[styles.button, { backgroundColor: colors.primary }]}
                            onPress={handleResetPassword}
                            disabled={loading}
                        >
                            {loading ? (
                                <ActivityIndicator color="#fff" />
                            ) : (
                                <ThemeText style={styles.buttonText}>Send Reset Link</ThemeText>
                            )}
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.backButton, { borderColor: colors.primary }]}
                            onPress={() => navigation.goBack()}
                            disabled={loading}
                        >
                            <ThemeText style={[styles.backButtonText, { color: colors.primary }]}>Back to Login</ThemeText>
                        </TouchableOpacity>
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
    button: {
        borderRadius: 12,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    backButton: {
        borderRadius: 12,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        backgroundColor: 'transparent',
    },
    backButtonText: {
        fontSize: 16,
        fontWeight: '600',
    },
});

export default ForgotPasswordScreen;
