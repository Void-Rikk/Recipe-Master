

interface RecipeHeaderProps {
    header: string;
}

function RecipeHeader({ header }: RecipeHeaderProps) {

    return (
        <h1 className="text-3xl">
            { header }
        </h1>
    );
}

export default RecipeHeader;