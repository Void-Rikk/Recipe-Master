import { useState } from "react";
import FormSwitcher from "../form-switcher/form-switcher.tsx";
import LoginForm from "../login-form/login-form.tsx";
import RegisterForm from "../register-form/register-form.tsx";
import FormHeader from "../form-header/form-header.tsx";


function Panel() {
    const [formState, setFormState] = useState<"login" | "register">("login");

    return (
        <div
            className="flex flex-col gap-4
             shadow-lg shadow-gray-200 rounded-lg
             p-4 mt-[10%] min-w-[40%] border-[1px] border-gray-300
             max-md:w-full max-md:rounded-none max-md:shadow-none max-md:border-none"
        >
            <FormHeader />
            <FormSwitcher formState={ formState } setFormState={ setFormState }/>
            { formState === "login"
                ? <LoginForm />
                : <RegisterForm />
            }
        </div>
    );
}

export default Panel;