import { Heart } from "lucide-react";
import Button from "../../../../shared/components/button/button.tsx";
import {useEffect, useState} from "react";
import { useAppSelector, useAuth, useFetch } from "../../../../shared/hooks/hooks.ts";
import { LikeService } from "../../../recipe-card";
import { useParams } from "react-router";
import { ExactLikeStateServ } from "../../services/services.ts";


interface RecipeLikesProps {
    likesCount: number;
}

function RecipeLikes({ likesCount }: RecipeLikesProps) {
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [likesAmount, setLikesAmount] = useState<number>(likesCount);

    const { recipeId } = useParams();
    const isAuth = useAuth();
    const userId = useAppSelector(state => state.user.user?.id);

    const { fetching: fetchLikeState, isLoading: isLoadingState } = useFetch(async () => {
        if (!recipeId || !userId || !isAuth) return;

        const result = await ExactLikeStateServ.getExactLikeState(Number(recipeId), userId);
        setIsLiked(result.state);
    });

    const { fetching: toggleLike, isLoading } = useFetch(async () => {
        if (!userId || !isAuth || !recipeId) {
            return;
        }

        const result = await LikeService.like(Number(recipeId), userId, isLiked);
        setIsLiked(result.likeState);
        if (result.likeState) {
            setLikesAmount(prev => prev + 1);
        }
        else {
            setLikesAmount(prev => prev - 1);
        }
    });

    useEffect(() => {
        fetchLikeState();
    }, []);

    const handleLike = () => {
        toggleLike();
    }

    return (
        <Button
            className="p-0 bg-transparent text-black hover:bg-transparent
                   self-start flex items-center gap-2
                   hover:cursor-pointer active:scale-110 transition-[all_ease-in_0.1s]"
            onClick={ handleLike }
            disabled={ isLoading || isLoadingState }
        >
            <Heart
                className={
                    `
                    ${ isLiked ? "fill-black" : "fill-transparent" }
                    ${ isLoading ? "animate-pulse" : "animate-none" }
                    `
                }
            />
            { likesAmount }
        </Button>
    );
}

export default RecipeLikes;