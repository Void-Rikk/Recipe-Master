import CommentForm from "../comment-form/comment-form.tsx";
import CommentList from "../comment-list/comment-list.tsx";
import { useState } from "react";
import type { RecipeComment } from "../../utils/types.ts";
import { useFetch } from "../../../../shared/hooks/hooks.ts";


function CommentSection() {
    const [comments, setComments] = useState<RecipeComment[]>([]);

    const { fetching: fetchComments, isLoading, error } = useFetch(async () => {

    });

    return (
        <>
            <CommentForm
                setComments={ setComments }
            />
            <CommentList
                comments={ comments }
            />
        </>
    );
}

export default CommentSection;