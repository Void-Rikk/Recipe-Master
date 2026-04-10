import Button from "../../../../shared/components/button/button.tsx";
import type { CreateRecipeFormType } from "../../utils/types.ts";
import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Plus, X } from "lucide-react";
import TextArea from "../../../../shared/components/textarea/textarea.tsx";


interface InstructionsFieldsetProps {
    form: CreateRecipeFormType;
    setForm: Dispatch<SetStateAction<CreateRecipeFormType>>;
}

function InstructionsFieldset({ form, setForm }: InstructionsFieldsetProps) {

    const handleAddInstructionField = () => {
        setForm(prev => ({
            ...prev,
            instructions: [...prev.instructions, { value: "", id: Date.now() }]
        }));
    }

    const handleChangeInstructionInput = (e: ChangeEvent<HTMLTextAreaElement>, id: number) => {
        setForm(prev => ({
            ...prev,
            instructions: prev.instructions.map((inp) => {
                if (inp.id === id) {
                    return { value: e.target.value, id };
                }
                else {
                    return inp;
                }
            }),
        }))
    }

    const handleDeleteInstructionField = (fieldId: number) => {
        setForm(prev => ({
            ...prev,
            instructions: prev.instructions.filter(inp => inp.id !== fieldId),
        }))
    }

    return (
        <>
            <div
                className="flex justify-between items-center"
            >
                <span className="text-2xl">Instructions</span>
                <Button
                    type="button"
                    onClick={ handleAddInstructionField }
                    className="pt-0 pb-0 pl-4 pr-4 flex justify-center items-center gap-2
                    cursor-pointer transition-all shadow shadow-gray-600
                    hover:translate-y-[-1px] hover:shadow-md"
                >
                    <Plus />
                    <span className="text-lg">Add</span>
                </Button>
            </div>
            <fieldset className="flex flex-col gap-2">
                {form.instructions.map((input, index) => (
                    <div key={ input.id } className="flex items-start gap-4">
                        <TextArea
                            className="grow-1 shadow shadow-gray-600"
                            placeholder={`Instruction ${index + 1}`}
                            value={ input.value }
                            onChange={ (e) => handleChangeInstructionInput(e, input.id) }
                        >
                        </TextArea>
                        <Button
                            type="button"
                            onClick={ () => handleDeleteInstructionField(input.id) }
                            className="p-0 min-w-min bg-transparent
                            text-gray-900 cursor-pointer
                            hover:scale-105"
                        >
                            <X />
                        </Button>
                    </div>
                ))}
            </fieldset>
        </>
    );
}

export default InstructionsFieldset;