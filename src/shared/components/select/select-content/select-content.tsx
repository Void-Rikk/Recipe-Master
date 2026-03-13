import { Select } from "radix-ui";
import { twMerge } from "tailwind-merge";

function SelectContent({ children, className, ...props }: Select.SelectViewportProps) {

    return (
        <Select.Portal>
            <Select.Content className="overflow-hidden rounded-md bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                <Select.Viewport { ...props } className={ twMerge('p-2', className) }>
                    { children }
                </Select.Viewport>
            </Select.Content>
        </Select.Portal>
    );
}

export default SelectContent;