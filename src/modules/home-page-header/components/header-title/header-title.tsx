import { ChefHat } from "lucide-react";


function HeaderTitle() {

    return (
        <h1
            className="flex gap-2 items-center text-3xl max-md:text-2xl"
        >
            <ChefHat
                className="w-8 h-8
                max-md:w-12 max-md:h-12"
            />
            <a id="start">Recipe Master</a>
        </h1>
    );
}

export default HeaderTitle;