import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../stores/store.ts";

type CallbackFn = () => Promise<void>;

export const useFetch = (callback: CallbackFn) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const fetching = async () => {
        try {
            setIsLoading(true);
            await callback();
        }
        catch (e) {
            if (e instanceof Error) {
                setError(e);
            }
        }
        finally {
            setIsLoading(false);
        }
    }

    return { fetching, isLoading, error };
}

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export const useAppSelector = useSelector.withTypes<RootState>();

export const useAuth = () => useAppSelector(state => state.user.isAuthenticated);