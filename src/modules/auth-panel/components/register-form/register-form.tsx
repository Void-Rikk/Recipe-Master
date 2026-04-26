import Label from "../../../../shared/components/label/label.tsx";
import Input from "../../../../shared/components/input/input.tsx";
import Button from "../../../../shared/components/button/button.tsx";
import { type SubmitEventHandler, useState } from "react";
import { useNavigate } from "react-router";
import AuthService from "../../services/services.ts";
import Loader from "../../../../shared/components/loader/loader.tsx";
import { useAppDispatch } from "../../../../shared/hooks/hooks.ts";
import { setUser } from "../../../../shared/stores/slices/user-slice.ts";
import { validateAuth } from "../../utils/utils.ts";


function RegisterForm() {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit: SubmitEventHandler = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Password was not confirmed");
            return;
        }

        if (!validateAuth(firstName, lastName, password, setError)) {
            return;
        }

        setError(null);

        try {
            setIsLoading(true);
            const user = await AuthService.register(firstName, lastName, password);
            dispatch(setUser(user));
            localStorage.setItem("user", JSON.stringify({ ...user, isAuthenticated: true }));
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
                    <span className="pl-2">Имя</span>
                    <Input
                        className="shadow shadow-gray-600"
                        type="text"
                        placeholder="Введите ваше имя"
                        value={ firstName }
                        onChange={ (e) => setFirstName(e.target.value) }
                        required
                    />
                </Label>
                <Label className="flex flex-col">
                    <span className="pl-2">Фамилия</span>
                    <Input
                        className="shadow shadow-gray-600"
                        type="text"
                        placeholder="Введите вашу фамилию"
                        value={ lastName }
                        onChange={ (e) => setLastName(e.target.value) }
                        required
                    />
                </Label>
                <Label className="flex flex-col">
                    <span className="pl-2">Пароль</span>
                    <Input
                        className="shadow shadow-gray-600"
                        type="password"
                        placeholder="Введите пароль"
                        value={ password }
                        onChange={ (e) => setPassword(e.target.value) }
                        required
                    />
                </Label>
                <Label className="flex flex-col">
                    <span className="pl-2">Подтверждение пароля</span>
                    <Input
                        className="shadow shadow-gray-600"
                        type="password"
                        placeholder="Повторите пароль"
                        value={ confirmPassword }
                        onChange={ (e) => setConfirmPassword(e.target.value) }
                        required
                    />
                </Label>
            </fieldset>

            <span className={ error ? "text-red-500 block text-center" : "hidden" }>{ error }</span>

            { isLoading && <div className="self-center"><Loader /></div> }

            <Button
                type="submit"
                className="transition-all cursor-pointer
                shadow shadow-gray-600
                hover:translate-y-[-1px] hover:shadow-md"
            >
                Зарегистрироваться
            </Button>
        </form>
    );
}

export default RegisterForm;