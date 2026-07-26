import Button from "../../../../shared/components/button/button.tsx";
import type { CreateRecipeFormType } from "../../utils/types.ts";
import type { Dispatch, SetStateAction } from "react";
import { initialFormState } from "../../constants/constants.ts";
import Loader from "../../../../shared/components/loader/loader.tsx";


interface FormControlsProps {
    error: string;
    setForm: Dispatch<SetStateAction<CreateRecipeFormType>>;
    isCreating: boolean;
    result: string;
}

function FormControls({ error, result, setForm, isCreating }: FormControlsProps) {

    const handleResetForm = () => {
        setForm(initialFormState);
    }

    return (
        <div className="flex justify-between">
            <div
            >
                <span className="text-red-500">{ error }</span>
                <span className="text-green-500">{ result }</span>
            </div>
            <div className="flex gap-2">
                <Button
                    type="button"
                    className="bg-transparent text-gray-900 cursor-pointer
                    shadow shadow-gray-300 border border-gray-200
                    transition-all hover:translate-y-[-1px] hover:shadow-md"
                    onClick={ handleResetForm }
                >
                    Сброс
                </Button>
                <Button
                    type="submit"
                    className="shadow shadow-gray-600 cursor-pointer
                    transition-all hover:translate-y-[-1px] hover:shadow-md"
                    disabled={ isCreating }
                >
                    { isCreating ?<div className="flex justify-center"><Loader /></div> : "Создать" }
                </Button>
            </div>
        </div>
    );
}

export default FormControls;