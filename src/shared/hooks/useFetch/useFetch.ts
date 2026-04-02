import { useState } from "react";

type CallbackFn = () => Promise<void>;

const useFetch = (callback: CallbackFn) => {
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

export default useFetch;