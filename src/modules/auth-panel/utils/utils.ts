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
        setError("First/Last name must contain at least 2 characters");
    }
    else if (!NameRegExp.test(firstName) || !NameRegExp.test(lastName)) {
        setError("First/Last name consists of only letters");
    }
    else if (password.length < 8) {
        setError("Password length must be at least 8 characters");
    }
    else {
        setError(null);
        return true;
    }

    return false;
}