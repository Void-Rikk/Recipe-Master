import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
    "py-2 px-4 text-white rounded-lg",
    {
        variants: {
            variant: {
                default: "bg-gray-600",
                destructive: "bg-red-600",
                primary: "bg-teal-600"
            },
            size: {
                default: "h-6 w-16",
                medium: "h-10 w-20",
                large: "h-14 w-24"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }
);

function Input( { className, variant, size, ...props }: ComponentProps<"input"> & VariantProps<typeof inputVariants> ) {

    return (
        <input { ...props } className={ twMerge(inputVariants({ variant, size, className })) }/>
    );
}

export default Input;