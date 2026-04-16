import { Heart } from "lucide-react";
import Button from "../../../../shared/components/button/button.tsx";
import { useState } from "react";


function RecipeLikes() {
    const [isLiked, setIsLiked] = useState<boolean>(false);

    const toggleLike = () => {
        setIsLiked(prev => !prev);
    }

    return (
        <Button
            className="p-0 bg-transparent text-black hover:bg-transparent
                   self-start flex items-center gap-2
                   hover:cursor-pointer active:scale-110 transition-[all_ease-in_0.1s]"
            onClick={ toggleLike }
        >
            <Heart
                className={`${isLiked && "fill-black"}`}
            />
            14
        </Button>
    );
}

export default RecipeLikes;