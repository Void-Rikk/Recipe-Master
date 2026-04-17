import Label from "../../../../shared/components/label/label.tsx";
import Input from "../../../../shared/components/input/input.tsx";
import { type SubmitEventHandler, useState } from "react";
import Button from "../../../../shared/components/button/button.tsx";
import Loader from "../../../../shared/components/loader/loader.tsx";
import { validateAuth } from "../../utils/validate-auth.ts";
import { useNavigate } from "react-router";
import AuthService from "../../services/auth-service/auth-service.ts";
import { useAppDispatch } from "../../../../shared/hooks/hooks.ts";
import { set } from "../../../../shared/stores/slices/user-slice.ts";


function LoginForm() {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit: SubmitEventHandler = async (e) => {
        e.preventDefault();

        if (!validateAuth(firstName, lastName, password, setError)) {
            return;
        }

        setError(null);

        try {
            setIsLoading(true);
            const user = await AuthService.login(firstName, lastName, password);
            dispatch(set(user));
            navigate("/");
        }
        catch (e) {
            if (e instanceof Error) {
                setError(e.message);
            }
        }
        finally {
            setIsLoading(false);
        }
    }

    return (
        <form
            className="flex flex-col gap-4"
            onSubmit={ (e) => handleSubmit(e) }
        >
            <fieldset className="flex flex-col gap-2">
                <Label className="flex flex-col">
                    <span className="pl-2">First Name</span>
                    <Input
                        className="shadow shadow-gray-600"
                        type="text"
                        placeholder="Enter your first name"
                        value={ firstName }
                        onChange={ (e) => setFirstName(e.target.value) }
                        required
                    />
                </Label>
                <Label className="flex flex-col">
                    <span className="pl-2">Last Name</span>
                    <Input
                        className="shadow shadow-gray-600"
                        type="text"
                        placeholder="Enter your last name"
                        value={ lastName }
                        onChange={ (e) => setLastName(e.target.value) }
                        required
                    />
                </Label>
                <Label className="flex flex-col">
                    <span className="pl-2">Password</span>
                    <Input
                        className="shadow shadow-gray-600"
                        type="password"
                        placeholder="Enter your password"
                        value={ password }
                        onChange={ (e) => setPassword(e.target.value) }
                        required
                    />
                </Label>
            </fieldset>

            <span className={ error ? "text-red-500 text-center block" : "hidden" }>{ error }</span>

            { isLoading && <div className="self-center"><Loader /></div> }

            <Button
                type="submit"
                className="transition-all cursor-pointer
                shadow shadow-gray-600
                hover:translate-y-[-1px] hover:shadow-md"
            >
                Login
            </Button>
        </form>
    );
}

export default LoginForm;