import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";


const buttonVariants = cva(
    'py-2 px-4 text-white rounded-lg outline-none',
    {
        variants: {

            variant: {
                default: 'bg-gray-900',
                destructive: 'bg-red-600',
                secondary: 'bg-gray-500'
            },
            size: {
                default: "min-h-10 min-w-20",
                medium: "min-h-14 min-w-24",
                large: 'min-h-18 min-w-28'
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }
)

function Button({ className, children, variant, size, ...props }: ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {

    return (
        <button { ...props } className={ twMerge(buttonVariants({ variant, size, className})) }>{ children }</button>
    );
}

export default Button;