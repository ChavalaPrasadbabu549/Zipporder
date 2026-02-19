import { useState, useEffect } from 'react';
import { FetchState } from '../types';

/**
 * Custom hook for fetching data from an API
 * @param url - The URL to fetch data from
 * @param options - Optional fetch options
 * @returns Object containing data, loading state, and error
 */
function useFetch<T = any>(url: string, options?: RequestInit): FetchState<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url, options);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                setData(result);
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err : new Error('An error occurred'));
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
}

export default useFetch;
