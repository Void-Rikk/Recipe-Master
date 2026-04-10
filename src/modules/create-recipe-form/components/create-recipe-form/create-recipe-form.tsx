import IngredientsFieldset from "../ingredients-fieldset/ingredients-fieldset.tsx";
import { useCreateRecipeForm } from "../../hooks/useCreateRecipeForm.ts";
import MainFieldset from "../main-fieldset/main-fieldset.tsx";
import InstructionsFieldset from "../instructions-fieldset/instructions-fieldset.tsx";
import type { SubmitEventHandler } from "react";
import FormControls from "../form-controls/form-controls.tsx";


function CreateRecipeForm() {
    const [form, setForm] = useCreateRecipeForm();

    const handleSubmitForm: SubmitEventHandler = (e) => {
        e.preventDefault();
    }

    return (
        <form
            className="flex flex-col gap-6 pl-[8%] pr-[8%]"
            onSubmit={ handleSubmitForm }
        >
            <MainFieldset form={ form } setForm={ setForm } />
            <IngredientsFieldset form={ form } setForm={ setForm } />
            <InstructionsFieldset form={ form } setForm={ setForm } />
            <FormControls setForm={ setForm } />
        </form>
    );
}

export default CreateRecipeForm;