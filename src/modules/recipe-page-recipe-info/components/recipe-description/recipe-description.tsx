

interface RecipeDescriptionProps {
    description: string;
}

function RecipeDescription({ description }: RecipeDescriptionProps) {

    return (
        <p className="text-lg text-gray-500 leading-6">
            { description }
        </p>
    );
}

export default RecipeDescription;