import IngredientsFieldset from "../ingredients-fieldset/ingredients-fieldset.tsx";
import { useCreateRecipeForm } from "../../hooks/useCreateRecipeForm.ts";
import MainFieldset from "../main-fieldset/main-fieldset.tsx";
import InstructionsFieldset from "../instructions-fieldset/instructions-fieldset.tsx";
import { type SubmitEventHandler, useState } from "react";
import FormControls from "../form-controls/form-controls.tsx";
import { createFormData, validateCreateRecipeForm } from "../../utils/utils.ts";
import CreateRecipeService from "../../services/services.ts";
import { useAppSelector, useFetch } from "../../../../shared/hooks/hooks.ts";
import { initialFormState } from "../../constants/constants.ts";


function CreateRecipeForm() {
    const [form, setForm] = useCreateRecipeForm();
    const [validationError, setValidationError] = useState<string | null>(null);
    const [result, setResult] = useState<string>("");
    const userId = useAppSelector(state => state.user.user!.id);

    const { fetching: createRecipe, isLoading, error } = useFetch(async () => {
        const formData = createFormData(form, userId);
        const result = await CreateRecipeService.create(formData);
        setResult(result.message);
        setForm(initialFormState);
    });

    const handleSubmitForm: SubmitEventHandler = (e) => {
        e.preventDefault();

        const validity = validateCreateRecipeForm(form);

        if (!validity[1]) {
            setValidationError(validity[0]);
            return;
        }

        setValidationError(null);

        createRecipe();
    }

    return (
        <form
            className="flex flex-col gap-6 pl-[8%] pr-[8%]"
            onSubmit={ handleSubmitForm }
        >
            <MainFieldset
                form={ form }
                setForm={ setForm }
            />
            <IngredientsFieldset
                form={ form }
                setForm={ setForm }
            />
            <InstructionsFieldset
                form={ form }
                setForm={ setForm }
            />
            <FormControls
                setForm={ setForm }
                error={ (error || validationError) ? error ? error.message : validationError! : "" }
                isCreating={ isLoading }
                result={ result }
            />
        </form>
    );
}

export default CreateRecipeForm;