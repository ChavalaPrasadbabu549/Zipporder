import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Alert,
    ScrollView,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../navigation/types';
import { useTheme } from '../context';
import ThemeText from '../components/Text';
import { Ionicons } from '@expo/vector-icons';
import { DynamicForm, Button } from '../components';
import { loginFields, validateForm } from '../utils';
import { useAppDispatch, useAppSelector, login, clearError } from '../redux';

type LoginScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Login'>;
interface LoginScreenProps {
    navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
    const [formValues, setFormValues] = useState<Record<string, string>>({
        email: '',
        password: '',
    });
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});

    const dispatch = useAppDispatch();
    const { loading, error } = useAppSelector((state) => state.auth);
    const { colors } = useTheme();

    useEffect(() => {
        if (error) {
            Alert.alert('Login Failed', error);
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
        const errors = validateForm(formValues, loginFields);
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleLogin = async () => {
        if (!validate()) {
            return;
        }
        dispatch(login({ email: formValues.email, password: formValues.password }));
    };

    return (
        <KeyboardAvoidingView
            style={[styles.container, { backgroundColor: colors.background }]}
            behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
        >
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.header}>
                    <View style={[styles.logoContainer, { backgroundColor: colors.primary }]}>
                        <Ionicons name="cart" size={40} color="#fff" />
                    </View>
                    <ThemeText style={[styles.appName, { color: colors.text }]}>ZippOrder</ThemeText>
                    <ThemeText style={[styles.tagline, { color: colors.textSecondary }]}>Bakery delights delivered</ThemeText>
                </View>

                <View style={styles.form}>
                    <DynamicForm
                        fields={loginFields}
                        values={formValues}
                        errors={formErrors}
                        onChange={handleFieldChange}
                    />

                    <TouchableOpacity
                        style={styles.forgotPassword}
                        onPress={() => navigation.navigate('ForgotPassword')}
                    >
                        <ThemeText style={[styles.forgotPasswordText, { color: colors.primary }]}>Forgot Password?</ThemeText>
                    </TouchableOpacity>

                    <Button
                        title={loading ? "Logging in..." : "Login"}
                        onPress={handleLogin}
                        disabled={loading}
                        style={{ backgroundColor: colors.primary, marginBottom: 16 }}
                    />

                    <Button
                        title="Create Account"
                        onPress={() => navigation.navigate('Register')}
                        variant="outline"
                        style={{ borderColor: colors.primary }}
                        textStyle={{ color: colors.primary }}
                    />
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
        justifyContent: 'center',
        padding: 24,
    },
    header: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logoContainer: {
        width: 80,
        height: 80,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
        transform: [{ rotate: '-10deg' }],
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    appName: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    tagline: {
        fontSize: 16,
    },
    form: {
        width: '100%',
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginBottom: 24,
    },
    forgotPasswordText: {
        fontSize: 14,
        fontWeight: '600',
    },
});

export default LoginScreen;
