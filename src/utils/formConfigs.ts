import { FormFieldConfig } from '../types';

export const registerFields: FormFieldConfig[] = [
    {
        name: 'name',
        label: 'Full Name',
        placeholder: 'Full Name',
        type: 'text',
        icon: 'person',
        required: true,
        autoCapitalize: 'words',
    },
    {
        name: 'email',
        label: 'Email',
        placeholder: 'Email',
        type: 'email',
        icon: 'mail',
        required: true,
        autoCapitalize: 'none',
    },
    // {
    //     name: 'phone',
    //     label: 'Phone Number',
    //     placeholder: 'Phone Number',
    //     type: 'number',
    //     icon: 'call',
    //     required: true,
    // },
    {
        name: 'password',
        label: 'Password',
        placeholder: 'Password',
        type: 'password',
        icon: 'lock-closed',
        required: true,
    },
    {
        name: 'confirmPassword',
        label: 'Confirm Password',
        placeholder: 'Confirm Password',
        type: 'password',
        icon: 'lock-closed',
        required: true,
    },
];

export const forgotPasswordFields: FormFieldConfig[] = [
    {
        name: 'email',
        label: 'Email Address',
        placeholder: 'Enter your email',
        type: 'email',
        icon: 'mail',
        required: true,
        autoCapitalize: 'none',
    },
];

export const loginFields: FormFieldConfig[] = [
    {
        name: 'email',
        label: 'Email',
        placeholder: 'Email',
        type: 'email',
        icon: 'mail',
        required: true,
        autoCapitalize: 'none',
    },
    {
        name: 'password',
        label: 'Password',
        placeholder: 'Password',
        type: 'password',
        icon: 'lock-closed',
        required: true,
    },
];
