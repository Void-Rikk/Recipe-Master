import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";


const baseStyle = "p-2 text-white shadow shadow-gray-600 resize-none bg-gray-900 rounded-xl placeholder:text-gray-300";

function TextArea({ className, ...props }: ComponentProps<"textarea">) {

    return <textarea
        className={ twMerge(baseStyle, className) }
        { ...props }
    >
    </textarea>
}

export default TextArea;