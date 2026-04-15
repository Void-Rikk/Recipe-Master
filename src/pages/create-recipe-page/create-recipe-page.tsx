import { Link } from "react-router";
import { ChevronLeft } from "lucide-react";
import { CreateRecipeForm } from "../../modules/create-recipe-form";


function CreateRecipePage() {

    return (
        <div className="flex flex-col gap-4 w-[55%] h-[100vh]
            rounded-md mt-2 mb-2
            shadow-[1px_1px_5px_1px] shadow-gray-300
            max-md:w-full max-md:mt-0 max-md:rounded-none max-md:shadow-none max-md:h-min"
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