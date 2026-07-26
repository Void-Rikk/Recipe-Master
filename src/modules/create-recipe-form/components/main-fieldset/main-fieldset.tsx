import Label from "../../../../shared/components/label/label.tsx";
import Input from "../../../../shared/components/input/input.tsx";
import TextArea from "../../../../shared/components/textarea/textarea.tsx";
import type { CreateRecipeFormType } from "../../utils/types.ts";
import type { ChangeEvent, Dispatch, SetStateAction } from "react";


interface MainFieldSetProps {
    form: CreateRecipeFormType;
    setForm: Dispatch<SetStateAction<CreateRecipeFormType>>;
}

function MainFieldset({ form, setForm }: MainFieldSetProps) {

    const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setForm(prev => ({
            ...prev,
            title: e.target.value,
        }));
    }

    const handleChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setForm(prev => ({
            ...prev,
            description: e.target.value,
        }));
    }

    const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
        setForm(prev => ({
            ...prev,
            image: e.target.files && e.target.files[0],
        }));
    }

    return (
        <fieldset
            className="flex flex-col gap-6"
        >
            <Label className="flex flex-col">
                <span className="text-xl">Название</span>
                <Input
                    placeholder="Название рецепта"
                    value={ form.title }
                    onChange={ handleChangeTitle }
                    className="shadow shadow-gray-600"
                />
            </Label>
            <Label className="flex flex-col">
                <span className="text-xl">Описание</span>
                <TextArea
                    placeholder="Небольшое описание"
                    value={ form.description }
                    onChange={ handleChangeDescription }
                    className="shadow shadow-gray-600"
                >
                </TextArea>
            </Label>
            <Label className="flex flex-col self-start">
                <span className="text-xl">Изображение</span>
                <Input
                    type="file"
                    className="self-start shadow shadow-gray-600 hover:cursor-pointer"
                    onChange={ handleFileSelect }
                />
            </Label>
        </fieldset>
    );
}

export default MainFieldset;