# 🚀 Zipporder - Complete Project Setup Guide

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Prerequisites](#prerequisites)
3. [Installation Commands](#installation-commands)
4. [Project Structure](#project-structure)
5. [Available Commands](#available-commands)
6. [Usage Guide](#usage-guide)
7. [Development Workflow](#development-workflow)
8. [Troubleshooting](#troubleshooting)

---

## 📱 Project Overview

**Zipporder** is a React Native application built with:
- ✅ **Expo** - For easy development and deployment
- ✅ **TypeScript** - For type safety
- ✅ **React Navigation** - For navigation
- ✅ **Yarn** - Package manager
- ✅ **Context API** - State management

---

## 🔧 Prerequisites

Before starting, ensure you have:

```bash
# Node.js (v14 or higher)
node --version

# Yarn package manager
yarn --version

# Expo CLI (optional, but recommended)
npm install -g expo-cli
```

---

## 📦 Installation Commands

### 1. Clone/Navigate to Project
```bash
cd "c:\Android Projects\Zipporder"
```

### 2. Install Dependencies
```bash
# Using Yarn (Recommended)
yarn install

# OR using npm
npm install
```

### 3. Install Navigation Dependencies (Already Done)
```bash
# React Navigation packages
yarn add @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs

# Required dependencies for Expo
npx expo install react-native-screens react-native-safe-area-context
```

---

## 📁 Project Structure

```
Zipporder/
│
├── 📁 src/                          # Source code directory
│   │
│   ├── 📁 navigation/               # Navigation configuration
│   │   ├── RootNavigator.tsx       # Root stack (Auth/Main switch)
│   │   ├── AuthNavigator.tsx       # Auth stack (Login/Register)
│   │   ├── TabNavigator.tsx        # Bottom tabs (Home/Orders/Profile)
│   │   ├── types.ts                # TypeScript navigation types
│   │   └── index.ts                # Navigation exports
│   │
│   ├── 📁 screens/                  # Screen components
│   │   ├── LoginScreen.tsx         # Login page
│   │   ├── RegisterScreen.tsx      # Registration page
│   │   ├── Home.tsx                # Home screen
│   │   ├── Orders.tsx              # Orders screen
│   │   ├── Profile.tsx             # Profile screen
│   │   └── index.ts                # Screen exports
│   │
│   ├── 📁 components/               # Reusable UI components
│   │   ├── Button.tsx              # Custom button component
│   │   ├── Card.tsx                # Card container component
│   │   ├── Loading.tsx             # Loading indicator
│   │   └── index.ts                # Component exports
│   │
│   ├── 📁 hooks/                    # Custom React hooks
│   │   ├── useFetch.ts             # Data fetching hook
│   │   ├── useKeyboard.ts          # Keyboard visibility hook
│   │   ├── useToggle.ts            # Boolean toggle hook
│   │   └── index.ts                # Hook exports
│   │
│   ├── 📁 utils/                    # Utility functions
│   │   ├── formatters.ts           # Format currency, dates, phone
│   │   ├── validators.ts           # Email, phone, password validation
│   │   ├── storage.ts              # Data persistence utility
│   │   └── index.ts                # Utility exports
│   │
│   ├── 📁 context/                  # State management
│   │   ├── AuthContext.tsx         # Authentication context
│   │   └── index.ts                # Context exports
│   │
│   └── index.ts                     # Main src exports
│
├── 📁 assets/                       # Static assets
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash.png
│
├── 📁 node_modules/                 # Dependencies (auto-generated)
│
├── 📄 App.tsx                       # Root application component
├── 📄 index.ts                      # Entry point
├── 📄 app.json                      # Expo configuration
├── 📄 package.json                  # Project dependencies
├── 📄 tsconfig.json                 # TypeScript configuration
├── 📄 yarn.lock                     # Yarn lock file
├── 📄 .gitignore                    # Git ignore rules
│
└── 📚 Documentation Files
    ├── README.md                    # Project overview
    ├── STRUCTURE.md                 # Folder structure guide
    ├── NAVIGATION.md                # Navigation documentation
    ├── NAVIGATION_SUMMARY.md        # Quick navigation reference
    └── PROJECT_SETUP.md             # This file
```

---

## ⚡ Available Commands

### Development Commands

```bash
# Start development server
yarn start
# OR
npm start

# Start with specific platform
yarn android          # Run on Android
yarn ios              # Run on iOS
yarn web              # Run on web browser

# Clear cache and start
yarn start --clear
```

### Build Commands

```bash
# Build for production (Expo)
expo build:android
expo build:ios
expo build:web
```

### Utility Commands

```bash
# Install new package
yarn add <package-name>

# Install dev dependency
yarn add -D <package-name>

# Remove package
yarn remove <package-name>

# Check for outdated packages
yarn outdated

# Update packages
yarn upgrade
```

---

## 📖 Usage Guide

### Starting the App

1. **Start Development Server**
   ```bash
   yarn start
   ```

2. **Choose Platform**
   - Press `a` for Android
   - Press `i` for iOS
   - Press `w` for Web
   - Scan QR code with Expo Go app

3. **Development Tools**
   - Press `r` to reload
   - Press `m` to toggle menu
   - Press `j` to open debugger
   - Press `?` to show all commands

### Authentication Flow

```
1. App Opens → Login Screen
2. User Options:
   a) Login with email/password
   b) Click "Sign Up" → Register Screen
3. After Login/Register → Main App (Tabs)
4. Navigate between tabs:
   - Home Tab 🏠
   - Orders Tab 📦
   - Profile Tab 👤
```

### Using Components

```typescript
// Import components
import { Button, Card, Loading } from './src/components';

// Use Button
<Button 
  title="Click Me" 
  onPress={() => console.log('Pressed')} 
  variant="primary" 
/>

// Use Card
<Card title="My Card">
  <Text>Content here</Text>
</Card>

// Use Loading
<Loading text="Loading..." />
```

### Using Hooks

```typescript
// Import hooks
import { useFetch, useKeyboard, useToggle } from './src/hooks';

// Use useFetch
const { data, loading, error } = useFetch('https://api.example.com/data');

// Use useKeyboard
const isKeyboardVisible = useKeyboard();

// Use useToggle
const { value, toggle, setTrue, setFalse } = useToggle(false);
```

### Using Utilities

```typescript
// Import utilities
import { formatCurrency, isValidEmail, storage } from './src/utils';

// Format currency
const price = formatCurrency(1234.56); // "$1,234.56"

// Validate email
const valid = isValidEmail('test@example.com'); // true

// Use storage
await storage.setItem('key', { data: 'value' });
const data = await storage.getItem('key');
```

### Using Authentication

```typescript
// Import auth hook
import { useAuth } from './src/context';

const MyComponent = () => {
  const { user, isAuthenticated, login, register, logout } = useAuth();

  // Login
  const handleLogin = async () => {
    try {
      await login('email@example.com', 'password');
      // Automatically navigates to main app
    } catch (error) {
      console.error('Login failed');
    }
  };

  // Register
  const handleRegister = async () => {
    try {
      await register('John Doe', 'email@example.com', 'password');
      // Automatically navigates to main app
    } catch (error) {
      console.error('Registration failed');
    }
  };

  // Logout
  const handleLogout = () => {
    logout();
    // Automatically navigates to login screen
  };

  return (
    <View>
      {isAuthenticated ? (
        <Text>Welcome, {user?.name}!</Text>
      ) : (
        <Text>Please login</Text>
      )}
    </View>
  );
};
```

---

## 🔄 Development Workflow

### 1. Creating a New Screen

```bash
# 1. Create screen file
touch src/screens/NewScreen.tsx

# 2. Add screen component
# 3. Export from src/screens/index.ts
export { default as NewScreen } from './NewScreen';

# 4. Add to navigation types (src/navigation/types.ts)
# 5. Add to appropriate navigator
```

### 2. Creating a New Component

```bash
# 1. Create component file
touch src/components/NewComponent.tsx

# 2. Add component code
# 3. Export from src/components/index.ts
export { default as NewComponent } from './NewComponent';
```

### 3. Creating a New Hook

```bash
# 1. Create hook file
touch src/hooks/useNewHook.ts

# 2. Add hook code
# 3. Export from src/hooks/index.ts
export { default as useNewHook } from './useNewHook';
```

### 4. Adding a New Utility

```bash
# 1. Add function to existing utility file
# OR create new utility file
touch src/utils/newUtil.ts

# 2. Export from src/utils/index.ts
export * from './newUtil';
```

---

## 🐛 Troubleshooting

### Common Issues and Solutions

#### 1. **Metro Bundler Cache Issues**
```bash
# Clear cache and restart
yarn start --clear

# OR manually clear
rm -rf node_modules
yarn install
yarn start --clear
```

#### 2. **Navigation Import Errors**
```bash
# Ensure all navigation packages are installed
yarn add @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs
npx expo install react-native-screens react-native-safe-area-context
```

#### 3. **TypeScript Errors**
```bash
# Restart TypeScript server in VS Code
# Press Ctrl+Shift+P → "TypeScript: Restart TS Server"

# OR check tsconfig.json is correct
```

#### 4. **Module Not Found Errors**
```bash
# Reinstall dependencies
rm -rf node_modules
rm yarn.lock
yarn install
```

#### 5. **Expo Go App Not Connecting**
```bash
# Ensure devices are on same network
# Restart Expo server
# Try tunnel mode: yarn start --tunnel
```

---

## 📊 Package.json Scripts

```json
{
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"
  }
}
```

---

## 🔑 Key Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| React Native | 0.81.5 | Mobile framework |
| React | 19.1.0 | UI library |
| Expo | ~54.0.33 | Development platform |
| TypeScript | ~5.9.2 | Type safety |
| React Navigation | ^6.x | Navigation |
| Yarn | 1.22.22 | Package manager |

---

## 📝 Environment Setup

### For Android Development
```bash
# Install Android Studio
# Set up Android SDK
# Create virtual device (AVD)
# Run: yarn android
```

### For iOS Development (Mac only)
```bash
# Install Xcode
# Install CocoaPods: sudo gem install cocoapods
# Run: yarn ios
```

### For Web Development
```bash
# No additional setup needed
# Run: yarn web
```

---

## 🎯 Quick Start Checklist

- [ ] Install Node.js (v14+)
- [ ] Install Yarn
- [ ] Clone/navigate to project
- [ ] Run `yarn install`
- [ ] Run `yarn start`
- [ ] Choose platform (Android/iOS/Web)
- [ ] Test login flow
- [ ] Explore navigation
- [ ] Start building!

---

## 📚 Additional Resources

### Documentation Files
- **README.md** - Project overview and features
- **STRUCTURE.md** - Detailed folder structure
- **NAVIGATION.md** - Complete navigation guide
- **NAVIGATION_SUMMARY.md** - Quick navigation reference

### External Resources
- [React Native Docs](https://reactnative.dev/)
- [Expo Docs](https://docs.expo.dev/)
- [React Navigation Docs](https://reactnavigation.org/)
- [TypeScript Docs](https://www.typescriptlang.org/)

---

## 🎊 You're All Set!

Your Zipporder project is ready for development!

```bash
# Start developing
yarn start

# Happy coding! 🚀
```

---

**Last Updated:** 2026-02-13  
**Version:** 1.0.0  
**Author:** Zipporder Development Team
