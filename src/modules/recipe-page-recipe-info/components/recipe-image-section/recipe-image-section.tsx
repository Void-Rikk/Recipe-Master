import { BASE_URL } from "../../../../shared/constants/constants.ts";


interface RecipeImageSectionProps {
    imageId: string;
    image_extension: string;
}

function RecipeImageSection({ imageId, image_extension }: RecipeImageSectionProps) {

    return (
        <figure className="flex justify-center">
            <img
                className="rounded-2xl shadow-[1px_1px_5px_1px] max-h-80 aspect-video shadow-gray-400"
                src={ `${BASE_URL}/recipe-images/${imageId}${image_extension}` }
                alt="recipe-picture"
            />
        </figure>
    );
}

export default RecipeImageSection;