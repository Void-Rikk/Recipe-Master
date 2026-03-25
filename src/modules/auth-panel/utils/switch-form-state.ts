import type {Dispatch, SetStateAction} from "react";

type SwitchFormStateFn = (formState: "login" | "register",
                          setFormState: Dispatch<SetStateAction<"login" | "register">>,
                          buttonName: "login" | "register") => void;

const switchFormState: SwitchFormStateFn =
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

export { switchFormState }