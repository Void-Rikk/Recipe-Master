import Label from "../../../../shared/components/label/label.tsx";
import Input from "../../../../shared/components/input/input.tsx";
import Button from "../../../../shared/components/button/button.tsx";
import { type SubmitEventHandler, useState } from "react";


function RegisterForm() {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const handleSubmit: SubmitEventHandler = (e) => {
        e.preventDefault();
    }

    return (
        <form
            className="flex flex-col gap-8"
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
                <Label className="flex flex-col">
                    <span className="pl-2">Confirm Password</span>
                    <Input
                        className="shadow shadow-gray-600"
                        type="password"
                        placeholder="Repeat password"
                        value={ confirmPassword }
                        onChange={ (e) => setConfirmPassword(e.target.value) }
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
                Register
            </Button>
        </form>
    );
}

export default RegisterForm;