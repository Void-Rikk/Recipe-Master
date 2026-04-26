import type { Dispatch, SetStateAction } from "react";

type SwitchFormStateFn = (formState: "login" | "register",
                          setFormState: Dispatch<SetStateAction<"login" | "register">>,
                          buttonName: "login" | "register") => void;

export const switchFormState: SwitchFormStateFn =
    (formState,
     setFormState,
     buttonName) => {

        if (formState === buttonName) {
            return;
        }

        if (formState === "login") {
            setFormState("register");
        }
        else {
            setFormState("login");
        }
    }

type ValidateAuthFn = (firstName: string,
                       lastName: string,
                       password: string,
                       setError: Dispatch<SetStateAction<string | null>>) => boolean;

const NameRegExp = /^[a-zA-Z]+$/;

export const validateAuth: ValidateAuthFn = (firstName, lastName, password, setError) => {

    if (firstName.length < 2 || lastName.length < 2) {
        setError("Минимальная длина имени/фамилии - 2 символа");
    }
    else if (!NameRegExp.test(firstName) || !NameRegExp.test(lastName)) {
        setError("Имя/Фамилия должны состоять только из букв");
    }
    else if (password.length < 8) {
        setError("Минимальная длина пароля - 8 символов");
    }
    else {
        setError(null);
        return true;
    }

    return false;
}