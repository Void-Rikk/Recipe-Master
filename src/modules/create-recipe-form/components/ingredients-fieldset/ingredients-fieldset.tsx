import Button from "../../../../shared/components/button/button.tsx";
import { Plus, X } from "lucide-react";
import Input from "../../../../shared/components/input/input.tsx";
import type { CreateRecipeFormType } from "../../utils/types.ts";
import type { ChangeEvent, Dispatch, SetStateAction } from "react";

interface IngredientsFieldsProps {
    form: CreateRecipeFormType,
    setForm: Dispatch<SetStateAction<CreateRecipeFormType>>
}

function IngredientsFieldset({ form, setForm }: IngredientsFieldsProps) {

    const handleAddIngredientField = () => {
        setForm(prev => ({
            ...prev,
            ingredients: [...prev.ingredients, { description: "", id: Date.now() }]
        }));
    }

    const handleChangeIngredientInput = (e: ChangeEvent<HTMLInputElement>, id: number) => {
        setForm(prev => ({
            ...prev,
            ingredients: prev.ingredients.map((inp) => {
                if (id === inp.id) {
                    return { description: e.target.value, id };
                }
                else {
                    return inp;
                }
            }),
        }));
    }

    const handleRemoveIngredientField = (fieldId: number) => {
        setForm(prev => ({
            ...prev,
            ingredients: prev.ingredients.filter(inp => inp.id !== fieldId),
        }));
    }

    return (
        <>
            <div
                className="flex justify-between items-center"
            >
                <span className="text-2xl">Ингредиенты</span>
                <Button
                    type="button"
                    onClick={ handleAddIngredientField }
                    className="pt-0 pb-0 pl-4 pr-4 flex justify-center items-center gap-2
                    cursor-pointer transition-all shadow shadow-gray-600
                    hover:translate-y-[-1px] hover:shadow-md"
                >
                    <Plus />
                    <span className="text-lg">Добавить</span>
                </Button>
            </div>
            <fieldset className="flex flex-col gap-2">
                {form.ingredients.map((input, index) => (
                    <div key={ input.id } className="flex gap-4">
                        <Input
                            className="grow-1 shadow shadow-gray-600"
                            placeholder={`Ингредиент ${index + 1}`}
                            value={ input.description }
                            onChange={(e) => handleChangeIngredientInput(e, input.id) }
                        />
                        <Button
                            type="button"
                            className="p-0 min-w-min bg-transparent
                            text-gray-900 cursor-pointer
                            hover:scale-105"
                            onClick={ () => handleRemoveIngredientField(input.id) }
                        >
                            <X />
                        </Button>
                    </div>
                ))}
            </fieldset>
        </>
    );
}

export default IngredientsFieldset;