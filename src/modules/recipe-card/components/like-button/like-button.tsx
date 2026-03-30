import { Heart } from "lucide-react";
import Button from "../../../../shared/components/button/button.tsx";
import { type MouseEventHandler, useState } from "react";


interface LikeButtonProps {
    likes: number;
    isLiked: boolean;
}

function LikeButton({ likes, isLiked }: LikeButtonProps) {
    const [isLikedState, setIsLikedState] = useState<boolean>(isLiked);

    const handleSetLike: MouseEventHandler = (e) => {
        e.stopPropagation();
        setIsLikedState(prev => !prev);
    }

    return (
        <Button
            className="min-w-min min-h-min p-0 flex items-center gap-2 text-gray-800 bg-transparent hover:bg-transparent"
        >
            <Heart
                className={`hover:cursor-pointer w-6 h-6 ${ isLikedState ? "fill-gray-800" : "fill-transparent" }`}
                onClick={ (e) => handleSetLike(e) }
            />
            { likes }
        </Button>
    );
}

export default LikeButton;