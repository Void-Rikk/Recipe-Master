import { Link } from "react-router";
import { ChevronLeft } from "lucide-react";
import { CreateRecipeForm } from "../../modules/create-recipe-form";


function CreateRecipePage() {

    return (
        <div className="flex flex-col gap-4 w-[70%]
            rounded-md
            shadow-[1px_1px_5px_1px] shadow-gray-300
            max-md:w-full max-md:mt-0 max-md:rounded-none max-md:shadow-none"
        >
            <Link
                to="/"
                className="pl-[1%] pt-[1%]"
            >
                <ChevronLeft />
            </Link>

            <h1 className="pl-[4%] text-3xl">Create Recipe</h1>

            <CreateRecipeForm />
        </div>
    );
}

export default CreateRecipePage;