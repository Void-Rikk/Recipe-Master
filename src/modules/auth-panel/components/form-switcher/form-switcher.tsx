import Button from "../../../../shared/components/button/button.tsx";
import type { Dispatch, SetStateAction } from "react";
import { switchFormState } from "../../utils/utils.ts";


interface FormSwitcherProps {
    formState: "login" | "register";
    setFormState: Dispatch<SetStateAction<"login" | "register">>
}

function FormSwitcher({ formState, setFormState }: FormSwitcherProps) {

    return (
        <div className="grid grid-cols-2 bg-gray-100 rounded-md">
            <Button
                className={ ("text-center m-2 p-2 text-black hover:bg-gray-100 transition-all")
                    + (formState === "login" ? " bg-white hover:bg-white shadow-md shadow-gray-400" : " bg-transparent cursor-pointer") }

                onClick={ () => switchFormState(formState, setFormState, "login") }
            >
                Вход
            </Button>

            <Button
                className={ ("text-center m-2 p-2 text-black hover:bg-gray-100 transition-all")
                    + (formState === "register" ? " bg-white hover:bg-white shadow-md shadow-gray-400" : " bg-transparent cursor-pointer") }

                onClick={ () => switchFormState(formState, setFormState, "register") }
            >
                Регистрация
            </Button>
        </div>
    );
}

export default FormSwitcher;