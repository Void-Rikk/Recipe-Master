import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

function DropdownMenuContent({ children, ...props }: DropdownMenuPrimitive.DropdownMenuContentProps) {

    return (
        <DropdownMenuPrimitive.Portal>
            <DropdownMenuPrimitive.Content {...props}>
                { children }
            </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Portal>
    );
}

const DropdownMenuItem = DropdownMenuPrimitive.Item;

export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem };