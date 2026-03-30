import { twMerge } from "tailwind-merge";

interface LoaderProps {
    className?: string;
}

function Loader({ className, ...props }: LoaderProps) {

    return (
        <div { ...props }
             className={ twMerge("w-6 h-6 border-2 border-gray-400 border-l-gray-800 rounded-full animate-spin", className) }
        >
        </div>
    );
}

export default Loader;