import CommentBlock from "../comment-block/comment-block.tsx";
import type { RecipeComment } from "../../utils/types.ts";


interface CommentListProps {
    comments: RecipeComment[]
}

function CommentList({ comments }: CommentListProps) {

    return (
        <section className="pl-[5%]">
            {
                comments.map(comment => (
                    <CommentBlock
                        key={ comment.id }
                        userId={ comment.user_id }
                        content={ comment.content }
                        authorName={ comment.first_name + " " + comment.last_name }
                    />
                ))
            }
        </section>
    );
}

export default CommentList;