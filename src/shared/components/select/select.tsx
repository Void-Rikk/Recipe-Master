import { Select as RSelect } from "radix-ui";
import { Check, ChevronDown } from "lucide-react";
import { twMerge } from "tailwind-merge";


function Select({ placeholder, children, onValueChange, ...props }: RSelect.SelectValueProps & RSelect.SelectProps ) {

    return (
        <RSelect.Root
            { ...props }
            onValueChange={ onValueChange }
        >
            <RSelect.Trigger
                className='flex h-10 bg-white items-center gap-2 rounded-md shadow-[0_2px_10px] shadow-black/16 px-4 text-sm outline-none'
            >
                <RSelect.Value placeholder={ placeholder } />
                <RSelect.Icon>
                    <ChevronDown className="h-4 w-4" />
                </RSelect.Icon>
            </RSelect.Trigger>
            { children }
        </RSelect.Root>
    );
}

function SelectContent({ children, className, ...props }: RSelect.SelectViewportProps) {

    return (
        <RSelect.Portal>
            <RSelect.Content className="overflow-hidden rounded-md bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                <RSelect.Viewport { ...props } className={ twMerge('p-2', className) }>
                    { children }
                </RSelect.Viewport>
            </RSelect.Content>
        </RSelect.Portal>
    );
}

function SelectItem({ children, className, ...props }: RSelect.SelectItemProps) {

    return (
        <RSelect.Item
            className={ twMerge('relative flex h-6 select-none items-center rounded-md pl-6 text-base leading-none data-[highlighted]:bg-gray-200 data-[highlighted]:outline-none',
                className) }
            { ...props }
        >
            <RSelect.ItemText>{ children }</RSelect.ItemText>
            <RSelect.ItemIndicator
                className="absolute left-0 inline-flex w-6 items-center justify-center"
            >
                <Check className="h-4 w-4"/>
            </RSelect.ItemIndicator>
        </RSelect.Item>
    );
}

export { Select, SelectContent, SelectItem };