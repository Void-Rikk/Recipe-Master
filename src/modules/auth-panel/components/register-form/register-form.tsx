import Label from "../../../../shared/components/label/label.tsx";
import Input from "../../../../shared/components/input/input.tsx";
import Button from "../../../../shared/components/button/button.tsx";
import { type SubmitEventHandler, useState } from "react";
import AuthService from "../../services/auth-service/auth-service.ts";


function RegisterForm() {
    const [nickname, setNickname] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const handleSubmit: SubmitEventHandler = (e) => {
        e.preventDefault();
        AuthService.register(nickname, password, confirmPassword);
    }

    return (
        <form
            className="flex flex-col gap-8"
            onSubmit={ (e) => handleSubmit(e) }
        >
            <fieldset className="flex flex-col gap-2">
                <Label className="flex flex-col">
                    Nickname
                    <Input
                        type="text"
                        placeholder="Enter your nickame"
                        value={ nickname }
                        onChange={ (e) => setNickname(e.target.value) }
                        required
                    />
                </Label>
                <Label className="flex flex-col">
                    Password
                    <Input
                        type="password"
                        placeholder="Enter your password"
                        value={ password }
                        onChange={ (e) => setPassword(e.target.value) }
                        required
                    />
                </Label>
                <Label className="flex flex-col">
                    Confirm Password
                    <Input
                        type="password"
                        placeholder="Repeat password"
                        value={ confirmPassword }
                        onChange={ (e) => setConfirmPassword(e.target.value) }
                        required
                    />
                </Label>
            </fieldset>

            <Button type="submit" className="transition-all">
                Register
            </Button>
        </form>
    );
}

export default RegisterForm;