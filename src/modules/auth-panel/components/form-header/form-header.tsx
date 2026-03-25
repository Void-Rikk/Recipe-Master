import { ChefHat } from "lucide-react";


function FormHeader() {

    return (
        <header className="flex gap-4 items-center justify-center">
            <ChefHat className="h-8 w-8" />
            <span className="text-2xl">Recipe Master</span>
        </header>
    );
}

export default FormHeader;