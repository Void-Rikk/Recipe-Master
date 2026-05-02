import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import { allowedFiles } from "../constants/constants.ts";
import type { EditProfileFormState } from "./types.ts";

export function validateProfileEdit(firstName: string, lastName: string, bio: string, image: File | null, setError: Dispatch<SetStateAction<string | null>>) {
    if (firstName.length < 2) {
        setError("Минимальная длина для имени - 2 символа");
    }
    else if (lastName.length < 2) {
        setError("Минимальная длина для фамилии - 2 символа");
    }
    else if (!image) {
        setError("Фотография не добавлена");
    }
    else if (!allowedFiles.has(image.type)) {
        setError("Недопустимый формат файла");
    }
    else if (bio.length === 0) {
        setError("Биография не может быть пустой");
    }
    else {
        return true;
    }

    return false;
}

export function createFormData(firstName: string, lastName: string, bio: string, image: File | null) {
    const formData = new FormData();

    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("bio", bio);
    if (image) {
        formData.append("image", image);
    }

    return formData;
}

type SetFormFn = Dispatch<SetStateAction<EditProfileFormState>>
type FormChangeEvent = ChangeEvent<HTMLInputElement, HTMLInputElement>;

export const handleChangeFile = (e: FormChangeEvent, setForm: SetFormFn) => {
    setForm(prev => ({
        ...prev,
        image: e.target.files![0]
    }));
}

export const handleChangeFirstName = (e: FormChangeEvent, setForm: SetFormFn) => {
    setForm(prev => ({
        ...prev,
        firstName: e.target.value
    }));
}

export const handleChangeLastName = (e: FormChangeEvent, setForm: SetFormFn) => {
    setForm(prev => ({
        ...prev,
        lastName: e.target.value
    }));
}

export const handleChangeBio = (e: FormChangeEvent, setForm: SetFormFn) => {
    setForm(prev => ({
        ...prev,
        bio: e.target.value
    }));
}

export const setInitialData = (firstName: string, lastName: string, bio: string, setForm: SetFormFn) => {
    setForm(prev => ({
        ...prev,
        firstName: firstName,
        lastName: lastName,
        bio: bio
    }));
}