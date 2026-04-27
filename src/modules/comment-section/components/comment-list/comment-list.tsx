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
                        userId={ comment.authorId }
                        content={ comment.content }
                        authorName={ comment.authorName }
                    />
                ))
            }
        </section>
    );
}

export default CommentList;