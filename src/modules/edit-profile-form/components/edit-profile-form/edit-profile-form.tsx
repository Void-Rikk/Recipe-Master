import UserPlaceholder from "../../../../../Sample_User_Icon.png";
import Input from "../../../../shared/components/input/input.tsx";
import Label from "../../../../shared/components/label/label.tsx";
import { useState } from "react";
import EditProfileFormControls from "../edit-profile-form-controls/edit-profile-form-controls.tsx";


function EditProfileForm() {
    const [nickname, setNickname] = useState<string>("");
    const [bio, setBio] = useState<string>("");

    return (
        <>
            <figure className="flex justify-center pb-2">
                <img
                    src={ UserPlaceholder }
                    alt={ "User Avatar" }
                    className="w-[20%] aspect-square bg-gray-100 rounded-full"
                />
            </figure>
            <form
                className="flex flex-col gap-4"
            >
                <Input
                    type="file"
                    placeholder="Change Avatar"
                    className="self-center hover:cursor-pointer"
                />
                <Label
                    className="flex flex-col"
                >
                    <span className="pl-2">Nickname</span>
                    <Input
                        type="text"
                        placeholder="Ivan Ivanov"
                        value={ nickname }
                        onChange={ (e) => setNickname(e.target.value) }
                    />
                </Label>
                <Label className="flex flex-col">
                    <span className="pl-2">Bio</span>
                    <Input
                        type="text"
                        placeholder="Describe yourself"
                        value={ bio }
                        onChange={ (e) => setBio(e.target.value) }
                    />
                </Label>
                <EditProfileFormControls />
            </form>
        </>
    );
}

export default EditProfileForm;