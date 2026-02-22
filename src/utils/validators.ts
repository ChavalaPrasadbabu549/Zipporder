import { PasswordValidationResult, FormFieldConfig } from '../types';


export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const isValidPhone = (phone: string): boolean => {
    const phoneRegex = /^[\d\s\-\(\)]+$/;
    const cleaned = phone.replace(/\D/g, '');
    return phoneRegex.test(phone) && cleaned.length === 10;
};

export const validatePassword = (password: string): PasswordValidationResult => {
    if (password.length < 8) {
        return { isValid: false, message: 'Password must be at least 8 characters' };
    }

    if (!/[A-Z]/.test(password)) {
        return { isValid: false, message: 'Password must contain at least one uppercase letter' };
    }

    if (!/[a-z]/.test(password)) {
        return { isValid: false, message: 'Password must contain at least one lowercase letter' };
    }

    if (!/[0-9]/.test(password)) {
        return { isValid: false, message: 'Password must contain at least one number' };
    }

    return { isValid: true, message: 'Password is strong' };
};

export const isRequired = (value: string): boolean => {
    return value.trim().length > 0;
};

export const validateForm = (
    values: Record<string, string>,
    fields: FormFieldConfig[]
): Record<string, string> => {
    const errors: Record<string, string> = {};

    fields.forEach((field) => {
        const value = values[field.name];

        // Check for required field
        if (field.required && (!value || !isRequired(value))) {
            errors[field.name] = `${field.label} is required`;
            return;
        }

        if (value) {
            // Check for valid email
            if (field.type === 'email' && !isValidEmail(value)) {
                errors[field.name] = 'Please enter a valid email address';
            }

            // Check for password length (basic check)
            if (field.type === 'password' && value.length < 6) {
                errors[field.name] = 'Password must be at least 6 characters';
            }

            // Check for confirm password match
            if (field.name === 'confirmPassword' && value !== values.password) {
                errors[field.name] = 'Passwords do not match';
            }
        }
    });

    return errors;
};
