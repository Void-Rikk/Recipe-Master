import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";


const buttonVariants = cva(
    'py-2 px-4 text-white rounded-lg',
    {
        variants: {

            variant: {
                default: 'bg-gray-600',
                destructive: 'bg-red-600',
                primary: 'bg-teal-600'
            },
            size: {
                default: "h-12 w-22",
                medium: "h-14 w-24",
                large: 'h-18 w-28'
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