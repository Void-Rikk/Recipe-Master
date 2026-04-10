import Label from "../../../../shared/components/label/label.tsx";
import Input from "../../../../shared/components/input/input.tsx";
import { type SubmitEventHandler, useState } from "react";
import Button from "../../../../shared/components/button/button.tsx";
import AuthService from "../../services/auth-service/auth-service.ts";


function LoginForm() {
    const [nickname, setNickname] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit: SubmitEventHandler = (e) => {
        e.preventDefault();
        AuthService.login(nickname, password);
    }

    return (
        <form
            className="flex flex-col gap-8"
            onSubmit={ (e) => handleSubmit(e) }
        >
            <fieldset className="flex flex-col gap-2">
                <Label className="flex flex-col">
                    <span className="pl-2">Nickname</span>
                    <Input
                        className="shadow shadow-gray-600"
                        type="text"
                        placeholder="Enter your nickame"
                        value={ nickname }
                        onChange={ (e) => setNickname(e.target.value) }
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