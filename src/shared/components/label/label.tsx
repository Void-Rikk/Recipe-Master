import { Label as RLabel } from "radix-ui";
import { twMerge } from "tailwind-merge";
import {cva, type VariantProps} from "class-variance-authority";


const labelVariants = cva(
    "text-black text-base",
    {
        variants: {
            variant: {
                default: "text-black",
                dark: "text-black",
                light: "text-white"
            },
            size: {
                default: "text-base",
                medium: "text-lg",
                large: "text-xl"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }
);

function Label({ className, children, size, ...props}: RLabel.LabelProps & VariantProps<typeof labelVariants>) {

    return (
        <RLabel.Root { ...props } className={ twMerge(labelVariants({ size, className })) }>
            { children }
        </RLabel.Root>
    );
}

export default Label;