import { type RefObject, useEffect, useRef, useState } from "react";
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

export const useInfiniteScroll = (infiniteScrollElement: RefObject<Element | null>, canLoad: boolean, isLoading: boolean, callback: () => void) => {
    const infiniteScrollObserver = useRef<IntersectionObserver>(null);

    useEffect(() => {
        if (isLoading) return;
        if (infiniteScrollObserver.current) infiniteScrollObserver.current.disconnect();

        const cb: IntersectionObserverCallback = (entries) => {
            if (entries[0].isIntersecting && canLoad) {
                callback();
            }
        }

        infiniteScrollObserver.current = new IntersectionObserver(cb);
        if (infiniteScrollElement.current) {
            infiniteScrollObserver.current.observe(infiniteScrollElement.current);
        }

        return () => {
            if (infiniteScrollObserver.current) {
                infiniteScrollObserver.current.disconnect();
            }
        }
    }, [isLoading]);
}