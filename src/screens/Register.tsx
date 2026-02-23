import React, { useState, useEffect } from 'react';
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
import { useTheme } from '../context';
import ThemeText from '../components/Text';
import { DynamicForm, Button } from '../components';
import { registerFields, validateForm } from '../utils';
import { useAppDispatch, useAppSelector, register, clearError } from '../redux';

type RegisterScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Register'>;

interface RegisterScreenProps {
    navigation: RegisterScreenNavigationProp;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
    const [formValues, setFormValues] = useState<Record<string, string>>({
        email: '',
        phone_number: '',
        dob: '',
        location: '',
        password: '',
        confirmPassword: '',
    });
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});

    const dispatch = useAppDispatch();
    const { loading, error } = useAppSelector((state) => state.auth);
    const { colors } = useTheme();

    useEffect(() => {
        if (error) {
            Alert.alert('Registration Failed', error);
            dispatch(clearError());
        }
    }, [error]);

    const handleFieldChange = (name: string, value: string) => {
        setFormValues(prev => ({ ...prev, [name]: value }));
        if (formErrors[name]) {
            setFormErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        const errors = validateForm(formValues, registerFields);
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleRegister = async () => {
        if (!validate()) {
            return;
        }
        // Send only the fields the API expects (exclude confirmPassword)
        dispatch(register({
            phone_number: formValues.phone_number,
            email: formValues.email,
            password: formValues.password,
            dob: formValues.dob,
            location: formValues.location,
        }));
    };

    return (
        <KeyboardAvoidingView
            style={[styles.container, { backgroundColor: colors.background }]}
            behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
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

                        <Button
                            title={loading ? "Creating Account..." : "Sign Up"}
                            onPress={handleRegister}
                            disabled={loading}
                            style={{ backgroundColor: colors.primary, marginTop: 8, marginBottom: 16 }}
                        />

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
