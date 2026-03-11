import { Checkbox } from "radix-ui";
import { Check } from "lucide-react";
import { twMerge } from "tailwind-merge";
import {cva, type VariantProps} from "class-variance-authority";


const checkboxVariants = cva(
    "flex appearance-none items-center justify-center rounded bg-black outline-none hover:bg-violet3",
    {
        variants: {
            variant: {
                default: "bg-white",
                destructive: "bg-red-600",
                dark: "bg-gray-600"
            },
            size: {
                default: "h-7 w-7",
                medium: "h-10 w-10",
                large: "h-14 w-14"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }
)

function defineIndicatorStyles(variant: string | null | undefined, size: string | null | undefined) {
    let styles = "";

    if (variant === "default" || !variant) {
        styles += "text-black";
    }
    else {
        styles += "text-white";
    }

    if (size === "default") {
        styles += " h-4 w-4";
    }
    else if (size === "medium") {
        styles += " h-7 w-7";
    }
    else if (size === "large"){
        styles += " h-11 w-11";
    }

    return styles;
}

function CheckBox({ className, variant, size, ...props }: Checkbox.CheckboxProps & VariantProps<typeof checkboxVariants>) {

    return (
        <Checkbox.Root
            { ...props }
            className={ twMerge(checkboxVariants({ variant, size, className })) }
        >
            <Checkbox.Indicator>
                <Check className={ defineIndicatorStyles(variant, size) }/>
            </Checkbox.Indicator>
        </Checkbox.Root>
    );
}

export default CheckBox;