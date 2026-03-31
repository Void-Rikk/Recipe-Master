import { ChefHat } from "lucide-react";


function HeaderTitle() {

    return (
        <h1
            className="flex gap-2 items-center text-3xl justify-self-end"
        >
            <ChefHat className="w-8 h-8" />
            Recipe Master
        </h1>
    );
}

export default HeaderTitle;