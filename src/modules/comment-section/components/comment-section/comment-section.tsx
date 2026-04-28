import CommentForm from "../comment-form/comment-form.tsx";
import CommentList from "../comment-list/comment-list.tsx";
import {useEffect, useState} from "react";
import type { RecipeComment } from "../../utils/types.ts";
import { useFetch } from "../../../../shared/hooks/hooks.ts";
import { useParams } from "react-router";
import { RecipeCommentServ } from "../../services/services.ts";
import Loader from "../../../../shared/components/loader/loader.tsx";


function CommentSection() {
    const [comments, setComments] = useState<RecipeComment[]>([]);
    const { recipeId } = useParams();

    const { fetching: fetchComments, isLoading, error } = useFetch(async () => {
        if (!recipeId) return;

        const data = await RecipeCommentServ.getAll(Number(recipeId));
        setComments(data);
    });

    useEffect(() => {
        fetchComments();
    }, []);

    return (
        <>
            <CommentForm
                setComments={ setComments }
            />
            { error && <span className="text-red-500 text-center">{ error.message}</span> }
            {
                isLoading
                    ? <div className="flex justify-center"><Loader className="border-4" /></div>
                    : <CommentList comments={ comments } />
            }
        </>
    );
}

export default CommentSection;