import { RadioGroup as RG } from "radix-ui";
import Label from "../label/label.tsx";

function RadioGroup({ children, ...props }: RG.RadioGroupProps) {

    return (
        <RG.Root
            className="flex flex-col gap-2.5"
            defaultValue="default"
            { ...props }
        >
            { children }
        </RG.Root>
    );
}

function RadioItem({ value, id, ...props }: RG.RadioGroupItemProps) {

    return (
        <div className="flex items-center">
            <RG.Item
                className="size-6 cursor-default rounded-full bg-white shadow-[0_2px_10px] shadow-gray-400 outline-none hover:bg-gray-100"
                value={ value }
                id={ id }
                { ...props }
            >
                <RG.Indicator className="relative flex size-full items-center justify-center after:block after:size-3 after:rounded-full after:bg-black" />
            </RG.Item>
            <Label
                className="pl-4 leading-none text-black"
                htmlFor={ id }
            >
                { value }
            </Label>
        </div>
    );
}

export { RadioGroup, RadioItem };