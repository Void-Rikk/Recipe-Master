import Pic from "../../../../../napoleon-test-image.png";


function RecipeImageSection() {

    return (
        <figure className="flex justify-center">
            <img
                className="rounded-2xl shadow-[1px_1px_5px_1px] max-h-80 aspect-video shadow-gray-400"
                src={ Pic }
                alt="recipe-picture"
            />
        </figure>
    );
}

export default RecipeImageSection;