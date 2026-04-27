import TextArea from "../../../../shared/components/textarea/textarea.tsx";
import Button from "../../../../shared/components/button/button.tsx";
import { type Dispatch, type SetStateAction, type SubmitEventHandler, useState } from "react";
import type { RecipeComment } from "../../utils/types.ts";
import Loader from "../../../../shared/components/loader/loader.tsx";
import { useAppSelector, useAuth, useFetch } from "../../../../shared/hooks/hooks.ts";
import { RecipeCommentServ } from "../../services/services.ts";
import { useParams } from "react-router";


interface CommentFormProps {
    setComments: Dispatch<SetStateAction<RecipeComment[]>>
}

function CommentForm({ setComments }: CommentFormProps) {
    const { recipeId } = useParams();
    const user = useAppSelector(state => state.user.user);
    const isAuth = useAuth();

    const [comment, setComment] = useState<string>("");
    const { fetching: uploadComment, isLoading, error } = useFetch(async () => {
        if (!user || !recipeId || !isAuth ) return;

        const commentToUpload = comment;
        const data = await RecipeCommentServ.upload(Number(recipeId), user.id, commentToUpload);
        const newComment: RecipeComment = {
            id: data.id,
            authorId: user.id,
            authorName: `${ user.first_name } ${ user.last_name }`,
            content: commentToUpload
        };

        setComment("");
        setComments(prev => [...prev, newComment]);
    });

    const handleSendComment: SubmitEventHandler = (e) => {
        e.preventDefault();

        if (!comment.length) {
            return;
        }

        uploadComment();
    }

    return (
        <form
            className="flex flex-col gap-1"
            onSubmit={ handleSendComment }
        >
            <div className="flex items-center gap-4 pl-[5%]">
                <TextArea
                    placeholder="Write a comment"
                    className="p-2 rounded-xl text-white bg-gray-900
                    shadow shadow-gray-600
                    resize-none grow-1 placeholder:text-gray-300"
                    value={ comment }
                    onChange={ (e) => setComment(e.target.value) }
                ></TextArea>
                <Button
                    className="flex justify-center items-center
                cursor-pointer transition-all
                shadow shadow-gray-600 h-[80%]
                hover:translate-y-[-2px] hover:shadow-md"
                    disabled={ isLoading || !isAuth }
                >
                    { isLoading ? <Loader /> : "Send" }
                </Button>
            </div>
            <span
                className="text-red-500 self-center"
            >
                { error && error.message }
            </span>
        </form>
    );
}

export default CommentForm;