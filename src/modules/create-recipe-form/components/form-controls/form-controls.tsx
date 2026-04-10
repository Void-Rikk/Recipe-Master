import Button from "../../../../shared/components/button/button.tsx";
import type { CreateRecipeFormType } from "../../utils/types.ts";
import type { Dispatch, SetStateAction } from "react";
import { initialFormState } from "../../constants/constants.ts";


interface FormControlsProps {
    setForm: Dispatch<SetStateAction<CreateRecipeFormType>>;
}

function FormControls({ setForm }: FormControlsProps) {

    const handleResetForm = () => {
        setForm(initialFormState);
    }

    return (
        <div className="flex gap-2 self-end">
            <Button
                type="button"
                className="bg-transparent text-gray-900 cursor-pointer
                shadow shadow-gray-300 border border-gray-200
                transition-all hover:translate-y-[-1px] hover:shadow-md"
                onClick={ handleResetForm }
            >
                Reset
            </Button>
            <Button
                type="submit"
                className="shadow shadow-gray-600 cursor-pointer
                transition-all hover:translate-y-[-1px] hover:shadow-md"
            >
                Create
            </Button>
        </div>
    );
}

export default FormControls;