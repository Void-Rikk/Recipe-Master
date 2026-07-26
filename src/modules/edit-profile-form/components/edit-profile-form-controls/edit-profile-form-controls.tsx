import Button from "../../../../shared/components/button/button.tsx";
import type { EditProfileFormState } from "../../utils/types.ts";
import type { Dispatch, SetStateAction } from "react";
import Loader from "../../../../shared/components/loader/loader.tsx";


interface EditProfileFormControlsProps {
    initialFormState: EditProfileFormState;
    setForm: Dispatch<SetStateAction<EditProfileFormState>>
    isLoading: boolean;
}

function EditProfileFormControls({ initialFormState, setForm, isLoading }: EditProfileFormControlsProps) {

    const handleResetForm = () => {
        setForm(initialFormState);
    }

    return (
        <div
            className="self-end flex gap-4"
        >
            <Button
                className="text-gray-900 bg-transparent
                border border-gray-300
                shadow shadow-gray-300
                hover:shadow-md hover:translate-y-[-1px] hover:cursor-pointer
                transition-all"
                type="button"
                onClick={ handleResetForm }
            >
                Сброс
            </Button>
            <Button
                type="submit"
                className="flex justify-center
                shadow shadow-gray-600
                hover:shadow-md hover:translate-y-[-1px] hover:cursor-pointer
                transition-all"
                disabled={ isLoading }
            >
                { isLoading ? <Loader /> : "Сохранить" }
            </Button>
        </div>
    );
}

export default EditProfileFormControls;