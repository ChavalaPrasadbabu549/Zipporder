import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Input from './Input';
import { useTheme } from '../context';
import { FormFieldConfig } from '../types';


interface DynamicFormProps {
    fields: FormFieldConfig[];
    values: Record<string, string>;
    errors: Record<string, string>;
    onChange: (name: string, value: string) => void;
}

const DynamicForm: React.FC<DynamicFormProps> = ({
    fields,
    values,
    errors,
    onChange
}) => {
    const { colors } = useTheme();
    const [passwordVisibility, setPasswordVisibility] = React.useState<Record<string, boolean>>({});

    const togglePasswordVisibility = (fieldName: string) => {
        setPasswordVisibility(prev => ({
            ...prev,
            [fieldName]: !prev[fieldName]
        }));
    };

    const getKeyboardType = (type?: string) => {
        switch (type) {
            case 'email': return 'email-address';
            case 'number': return 'numeric';
            default: return 'default';
        }
    };

    return (
        <View>
            {fields.map((field) => (
                <Input
                    key={field.name}
                    label={field.label}
                    placeholder={field.placeholder}
                    value={values[field.name] || ''}
                    onChangeText={(text) => onChange(field.name, text)}
                    error={errors[field.name]}
                    secureTextEntry={field.type === 'password' && !passwordVisibility[field.name]}
                    keyboardType={getKeyboardType(field.type)}
                    autoCapitalize={field.autoCapitalize || 'none'}
                    required={field.required}
                    leftIcon={
                        field.icon ? (
                            <Ionicons
                                name={field.icon}
                                size={20}
                                color={colors.textSecondary}
                            />
                        ) : undefined
                    }
                    rightIcon={
                        field.type === 'password' ? (
                            <TouchableOpacity onPress={() => togglePasswordVisibility(field.name)}>
                                <Ionicons
                                    name={passwordVisibility[field.name] ? 'eye' : 'eye-off'}
                                    size={20}
                                    color={colors.textSecondary}
                                />
                            </TouchableOpacity>
                        ) : undefined
                    }
                />
            ))}
        </View>
    );
};

export default DynamicForm;
