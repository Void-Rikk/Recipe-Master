import { Heart } from "lucide-react";
import Button from "../../../../shared/components/button/button.tsx";
import { type MouseEventHandler, useState } from "react";
import {useAppSelector, useAuth, useFetch} from "../../../../shared/hooks/hooks.ts";
import LikeService from "../../services/services.ts";


interface LikeButtonProps {
    recipeId: number
    likes: number;
    isLiked: boolean;
}

function LikeButton({ recipeId, likes, isLiked }: LikeButtonProps) {
    const isAuth = useAuth();
    const userId = useAppSelector(state => state.user.user?.id);
    const [likesAmount, setLikesAmount] = useState<number>(likes);
    const [isLikedState, setIsLikedState] = useState<boolean>(isLiked);

    const { fetching: toggleLike, isLoading } = useFetch(async () => {
        if (!isAuth || !userId) return;

        const result = await LikeService.like(recipeId, userId, isLikedState);
        setIsLikedState(result.likeState);
        if (result.likeState) {
            setLikesAmount(prev => prev + 1);
        }
        else {
            setLikesAmount(prev => prev - 1);
        }
    });

    const handleLike: MouseEventHandler = (e) => {
        e.stopPropagation();

        toggleLike();
    }

    return (
        <Button
            className="min-w-min min-h-min p-0 flex items-center gap-2
             text-gray-800 bg-transparent hover:bg-transparent"
            onClick={ (e) => handleLike(e) }
        >
            <Heart
                className={`hover:cursor-pointer w-7 h-7
                ${ isLikedState
                    ? "fill-gray-800"
                    : "fill-transparent" 
                }
                ${ isLoading
                    ? "animate-pulse"
                    : "animate-none" 
                }`}
            />
            <span className="text-xl">{ likesAmount }</span>
        </Button>
    );
}

export default LikeButton;