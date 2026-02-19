# Zipporder - React Native Project

A React Native application built with Expo and TypeScript.

## 📁 Folder Structure

```
Zipporder/
├── src/
│   ├── pages/              # Screen components
│   │   ├── HomeScreen.tsx
│   │   ├── ProfileScreen.tsx
│   │   ├── OrdersScreen.tsx
│   │   └── index.ts
│   ├── components/         # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Loading.tsx
│   │   └── index.ts
│   ├── hooks/              # Custom React hooks
│   │   ├── useFetch.ts
│   │   ├── useKeyboard.ts
│   │   ├── useToggle.ts
│   │   └── index.ts
│   ├── utils/              # Utility functions
│   │   ├── formatters.ts
│   │   ├── validators.ts
│   │   ├── storage.ts
│   │   └── index.ts
│   └── index.ts            # Main exports
├── assets/                 # Images, fonts, etc.
├── App.tsx                 # Root component
├── app.json                # Expo configuration
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript configuration
└── yarn.lock               # Yarn lock file

```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Yarn package manager
- Expo CLI

### Installation

1. Install dependencies:
```bash
yarn install
```

2. Start the development server:
```bash
yarn start
```

3. Run on specific platform:
```bash
yarn android  # Run on Android
yarn ios      # Run on iOS
yarn web      # Run on web
```

## 📱 Pages

### HomeScreen
The main landing page with welcome message and call-to-action button.

### ProfileScreen
User profile page displaying user information and statistics.

### OrdersScreen
Order history page showing list of orders with status badges.

## 🧩 Components

### Button
Reusable button component with multiple variants:
- `primary` - Blue background
- `secondary` - Purple background
- `outline` - Transparent with border

**Usage:**
```tsx
import { Button } from './src/components';

<Button 
  title="Click Me" 
  onPress={() => console.log('Pressed')} 
  variant="primary" 
/>
```

### Card
Container component for content with shadow and rounded corners.

**Usage:**
```tsx
import { Card } from './src/components';

<Card title="My Card">
  <Text>Card content here</Text>
</Card>
```

### Loading
Loading indicator component with optional text.

**Usage:**
```tsx
import { Loading } from './src/components';

<Loading text="Loading..." />
```

## 🪝 Custom Hooks

### useFetch
Hook for fetching data from APIs with loading and error states.

**Usage:**
```tsx
import { useFetch } from './src/hooks';

const { data, loading, error } = useFetch('https://api.example.com/data');
```

### useKeyboard
Hook to track keyboard visibility state.

**Usage:**
```tsx
import { useKeyboard } from './src/hooks';

const isKeyboardVisible = useKeyboard();
```

### useToggle
Hook for managing boolean toggle state.

**Usage:**
```tsx
import { useToggle } from './src/hooks';

const { value, toggle, setTrue, setFalse } = useToggle(false);
```

## 🛠️ Utilities

### Formatters
- `formatCurrency(amount, currency, locale)` - Format numbers as currency
- `formatDate(date, options)` - Format dates
- `formatPhoneNumber(phone)` - Format phone numbers
- `truncateText(text, maxLength)` - Truncate text with ellipsis

### Validators
- `isValidEmail(email)` - Validate email addresses
- `isValidPhone(phone)` - Validate phone numbers
- `validatePassword(password)` - Validate password strength
- `isRequired(value)` - Check if field is not empty

### Storage
Utility class for managing app data persistence.

**Usage:**
```tsx
import { storage } from './src/utils';

await storage.setItem('key', value);
const data = await storage.getItem('key');
await storage.removeItem('key');
await storage.clear();
```

## 📦 Tech Stack

- **React Native**: 0.81.5
- **React**: 19.1.0
- **Expo**: ~54.0.33
- **TypeScript**: ~5.9.2

## 📝 Scripts

- `yarn start` - Start Expo development server
- `yarn android` - Run on Android device/emulator
- `yarn ios` - Run on iOS device/simulator
- `yarn web` - Run in web browser

## 🎨 Code Style

This project uses TypeScript with strict mode enabled for better type safety and code quality.

## 📄 License

Private project

---

Built with ❤️ using React Native and Expo
