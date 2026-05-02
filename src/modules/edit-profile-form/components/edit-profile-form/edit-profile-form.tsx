import UserPlaceholder from "../../../../../Sample_User_Icon.png";
import Input from "../../../../shared/components/input/input.tsx";
import Label from "../../../../shared/components/label/label.tsx";
import { type SubmitEventHandler, useEffect, useState } from "react";
import EditProfileFormControls from "../edit-profile-form-controls/edit-profile-form-controls.tsx";
import {
    createFormData, handleChangeBio,
    handleChangeFile,
    handleChangeFirstName,
    handleChangeLastName, setInitialData,
    validateProfileEdit
} from "../../utils/utils.ts";
import { useFetch } from "../../../../shared/hooks/hooks.ts";
import { UserService } from "../../../user-card";
import { BASE_URL } from "../../../../shared/constants/constants.ts";
import Loader from "../../../../shared/components/loader/loader.tsx";
import { useCreateEditProfileForm } from "../../hooks/hooks.ts";
import EditProfileService from "../../services/services.ts";


interface EditProfileFormProps {
    userId: number;
}

function EditProfileForm({ userId }: EditProfileFormProps) {
    const [form, setForm] = useCreateEditProfileForm();
    const [currentImage, setCurrentImage] = useState<string | null>(null);
    const [validationError, setValidationError] = useState<string | null>(null);
    const [initialFormState, setInitialFormState] = useCreateEditProfileForm();
    const [message, setMessage] = useState<string | null>(null);

    const { fetching: fetchCurrentData, isLoading: isCurrentDataLoading } = useFetch(async () => {
        const data = await UserService.getUserInfo(userId);

        setInitialData(data.first_name, data.last_name, data.bio || "", setForm);
        setInitialData(data.first_name, data.last_name, data.bio || "", setInitialFormState);
        if (data.avatar_id) {
            setCurrentImage(`${data.avatar_id}${data.avatar_extension}`);
        }
    });

    const { fetching: updateUser, isLoading, error } = useFetch(async () => {
        const formData = createFormData(form.firstName, form.lastName, form.bio, form.image);

        const data = await EditProfileService.editProfile(userId, formData);
        setMessage(data.status);
    });

    const handleSubmitEdit: SubmitEventHandler = (e) => {
        e.preventDefault();

        if (!validateProfileEdit(form.firstName, form.lastName, form.bio, form.image, setValidationError)) {
            return;
        }

        updateUser();
    }

    useEffect(() => {
        fetchCurrentData();
    }, []);

    if (isCurrentDataLoading) {
        return <div className="flex justify-center"><Loader /></div>;
    }

    return (
        <>
            <figure className="flex justify-center pb-2">
                <img
                    src={ form.image
                        ? URL.createObjectURL(form.image)
                        : currentImage
                            ? `${BASE_URL}/user-avatars/${currentImage}`
                            : UserPlaceholder }
                    alt={ "Your Avatar" }
                    className="w-[20%] aspect-square bg-gray-100 rounded-full"
                />
            </figure>
            <form
                className="flex flex-col gap-4"
                onSubmit={ handleSubmitEdit }
            >
                <Input
                    type="file"
                    className="self-center hover:cursor-pointer"
                    onChange={ (e) => handleChangeFile(e, setForm) }
                />
                <Label
                    className="flex flex-col"
                >
                    <span className="pl-2">Имя</span>
                    <Input
                        type="text"
                        placeholder="Иван"
                        value={ form.firstName }
                        onChange={ (e) => handleChangeFirstName(e, setForm) }
                    />
                </Label>
                <Label
                    className="flex flex-col"
                >
                    <span className="pl-2">Фамилия</span>
                    <Input
                        type="text"
                        placeholder="Иванов"
                        value={ form.lastName }
                        onChange={ (e) => handleChangeLastName(e, setForm) }
                    />
                </Label>
                <Label className="flex flex-col">
                    <span className="pl-2">Биография</span>
                    <Input
                        type="text"
                        placeholder="Расскажите немного о себе"
                        value={ form.bio }
                        onChange={ (e) => handleChangeBio(e, setForm) }
                    />
                </Label>
                { validationError && <span className="text-red-500">{ validationError }</span> }
                { error && <span className="text-red-500">{ error.message }</span> }
                { message && <span className="text-green-500">{ message }</span> }
                <EditProfileFormControls
                    initialFormState={ initialFormState }
                    setForm={ setForm }
                    isLoading={ isLoading }
                />
            </form>
        </>
    );
}

export default EditProfileForm;