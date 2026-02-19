/**
 * Storage utility for managing async storage
 */

// Note: In a real app, you would use @react-native-async-storage/async-storage
// This is a mock implementation for demonstration

interface StorageItem {
    [key: string]: any;
}

class Storage {
    private storage: StorageItem = {};

    /**
     * Save data to storage
     * @param key - Storage key
     * @param value - Value to store
     */
    async setItem(key: string, value: any): Promise<void> {
        try {
            const jsonValue = JSON.stringify(value);
            this.storage[key] = jsonValue;
            // In real app: await AsyncStorage.setItem(key, jsonValue);
        } catch (error) {
            console.error('Error saving data:', error);
            throw error;
        }
    }

    /**
     * Get data from storage
     * @param key - Storage key
     * @returns Stored value or null
     */
    async getItem<T = any>(key: string): Promise<T | null> {
        try {
            const jsonValue = this.storage[key];
            // In real app: const jsonValue = await AsyncStorage.getItem(key);
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (error) {
            console.error('Error reading data:', error);
            return null;
        }
    }

    /**
     * Remove data from storage
     * @param key - Storage key
     */
    async removeItem(key: string): Promise<void> {
        try {
            delete this.storage[key];
            // In real app: await AsyncStorage.removeItem(key);
        } catch (error) {
            console.error('Error removing data:', error);
            throw error;
        }
    }

    /**
     * Clear all storage
     */
    async clear(): Promise<void> {
        try {
            this.storage = {};
            // In real app: await AsyncStorage.clear();
        } catch (error) {
            console.error('Error clearing storage:', error);
            throw error;
        }
    }
}

export default new Storage();
