import { Select } from "radix-ui";
import {twMerge} from "tailwind-merge";
import { Check } from "lucide-react";


function SelectItem({ children, className, ...props }: Select.SelectItemProps) {

    return (
        <Select.Item
            className={ twMerge('relative flex h-6 select-none items-center rounded-md pl-6 text-base leading-none data-[highlighted]:bg-gray-200 data-[highlighted]:outline-none',
                className) }
            { ...props }
        >
            <Select.ItemText>{ children }</Select.ItemText>
            <Select.ItemIndicator
                className="absolute left-0 inline-flex w-6 items-center justify-center"
            >
                <Check className="h-4 w-4"/>
            </Select.ItemIndicator>
        </Select.Item>
    );
}

export default SelectItem;