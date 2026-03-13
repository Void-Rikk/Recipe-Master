import { Dialog as RDialog } from "radix-ui";
import { X } from "lucide-react";
import { twMerge } from "tailwind-merge";


function Dialog({ children, ...props }: RDialog.DialogProps) {

    return (
        <RDialog.Root { ...props }>
            { children }
        </RDialog.Root>
    );
}

function DialogTrigger({ children, ...props }: RDialog.DialogTriggerProps) {

    return (
        <RDialog.Trigger asChild { ...props }>
            { children }
        </RDialog.Trigger>
    );
}

function DialogContent({ children, ...props }: RDialog.DialogContentProps) {

    return (
        <RDialog.Portal>
            <RDialog.Overlay className="fixed inset-0 bg-gray-500" />
            <RDialog.Content
                className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-8 focus:outline-none"
                { ...props }
            >
                { children }
                <RDialog.Close asChild>
                    <button
                        className="absolute right-2.5 top-2.5 inline-flex w-6 h-6 appearance-none items-center justify-center rounded-full bg-gray-300 hover:bg-gray-500 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none"
                        aria-label="Close"
                    >
                        <X className="h-4 w-4"/>
                    </button>
                </RDialog.Close>
            </RDialog.Content>
        </RDialog.Portal>
    );
}

function DialogTitle({ className, children, ...props }: RDialog.DialogTitleProps) {

    return (
        <RDialog.Title
            className={ twMerge("m-0 text-lg font-medium", className) }
            { ...props }
        >
            { children }
        </RDialog.Title>
    );
}

function DialogDescription({ className, children, ...props }: RDialog.DialogDescriptionProps) {

    return (
        <RDialog.Description
            className={ twMerge("mb-5 mt-2.5 text-base leading-normal text-gray-500", className) }
            { ...props }
        >
            { children }
        </RDialog.Description>
    );
}

export { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription };