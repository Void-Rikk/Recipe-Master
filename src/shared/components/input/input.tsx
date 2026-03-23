import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
    "py-2 px-4 text-white rounded-lg outline-blue-200",
    {
        variants: {
            variant: {
                default: "bg-gray-900",
                destructive: "bg-red-600",
                secondary: "bg-gray-500"
            },
            size: {
                default: "min-h-6 min-w-30",
                medium: "min-h-10 min-w-50",
                large: "min-h-14 min-w-70"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }
);

function Input( { className, variant, size, ...props }: Omit<ComponentProps<"input">, "size"> & VariantProps<typeof inputVariants> ) {

    return (
        <input { ...props } className={ twMerge(inputVariants({ variant, size, className })) }/>
    );
}

export default Input;