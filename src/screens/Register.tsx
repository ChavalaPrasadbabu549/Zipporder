import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Alert,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../navigation/types';
import { useAuth, useTheme } from '../context';
import ThemeText from '../components/Text';
import { DynamicForm } from '../components';
import { isValidEmail } from '../utils/validators';
import { registerFields } from '../utils';
import { ActivityIndicator } from 'react-native';

type RegisterScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Register'>;

interface RegisterScreenProps {
    navigation: RegisterScreenNavigationProp;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
    const [formValues, setFormValues] = useState<Record<string, string>>({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);
    const { register } = useAuth();
    const { colors } = useTheme();

    const handleFieldChange = (name: string, value: string) => {
        setFormValues(prev => ({ ...prev, [name]: value }));
        if (formErrors[name]) {
            setFormErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        let isValid = true;
        const errors: Record<string, string> = {};

        if (!formValues.name) {
            errors.name = 'Name is required';
            isValid = false;
        }

        if (!formValues.email) {
            errors.email = 'Email is required';
            isValid = false;
        } else if (!isValidEmail(formValues.email)) {
            errors.email = 'Please enter a valid email';
            isValid = false;
        }

        if (!formValues.phone) {
            errors.phone = 'Phone number is required';
            isValid = false;
        }

        if (!formValues.password) {
            errors.password = 'Password is required';
            isValid = false;
        } else if (formValues.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
            isValid = false;
        }

        if (!formValues.confirmPassword) {
            errors.confirmPassword = 'Confirm Password is required';
            isValid = false;
        } else if (formValues.password !== formValues.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    const handleRegister = async () => {
        if (!validate()) {
            return;
        }

        try {
            setLoading(true);
            await register(formValues.name, formValues.email, formValues.password);
        } catch (error) {
            Alert.alert('Error', 'Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView
            style={[styles.container, { backgroundColor: colors.background }]}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.content}>
                    <ThemeText style={styles.title}>Create Account</ThemeText>
                    <ThemeText style={[styles.subtitle, { color: colors.textSecondary }]}>Sign up to get started</ThemeText>

                    <View style={styles.form}>
                        <DynamicForm
                            fields={registerFields}
                            values={formValues}
                            errors={formErrors}
                            onChange={handleFieldChange}
                        />

                        <TouchableOpacity
                            style={[styles.registerButton, { backgroundColor: colors.primary }]}
                            onPress={handleRegister}
                            disabled={loading}
                        >
                            {loading ? (
                                <ActivityIndicator color="#fff" />
                            ) : (
                                <ThemeText style={styles.registerButtonText}>Sign Up</ThemeText>
                            )}
                        </TouchableOpacity>

                        <View style={styles.loginContainer}>
                            <ThemeText style={[styles.loginText, { color: colors.textSecondary }]}>Already have an account? </ThemeText>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <ThemeText style={[styles.loginLink, { color: colors.primary }]}>Login</ThemeText>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 24,
        paddingVertical: 40,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 40,
    },
    form: {
        width: '100%',
    },
    registerButton: {
        borderRadius: 12,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8,
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
    registerButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginText: {
        fontSize: 14,
    },
    loginLink: {
        fontSize: 14,
        fontWeight: '600',
    },
});

export default RegisterScreen;
