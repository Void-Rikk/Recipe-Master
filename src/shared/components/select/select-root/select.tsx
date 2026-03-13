import { Select as RSelect } from "radix-ui";
import { ChevronDown } from "lucide-react";


function Select({ placeholder, children, onValueChange }: RSelect.SelectValueProps & RSelect.SelectProps ) {

    return (
        <RSelect.Root
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

export default Select;