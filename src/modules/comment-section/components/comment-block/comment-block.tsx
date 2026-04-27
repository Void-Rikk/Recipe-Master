import { CircleUserRound } from "lucide-react";
import { Link } from "react-router";


interface CommentBlockProps {
    userId: number;
    content: string;
    authorName: string
}

function CommentBlock({ userId, content, authorName }: CommentBlockProps) {

    return (
        <div className="flex gap-2">
            <CircleUserRound />
            <p
                className="flex flex-col border rounded-xl border-gray-300 max-w-[90%]
                           shadow-md shadow-gray-300 p-2"
            >
                <Link
                    to={`/user/${userId}`}
                    className="self-start font-bold hover:underline"
                >
                    { authorName }
                </Link>
                <span>
                    { content }
                </span>
            </p>
        </div>
    );
}

export default CommentBlock;