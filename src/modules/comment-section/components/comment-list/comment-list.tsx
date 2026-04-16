import { CircleUserRound } from "lucide-react";
import { Link } from "react-router";


function CommentList() {

    return (
        <section className="pl-[5%]">
            <div className="flex gap-2">
                <CircleUserRound />
                <p
                    className="flex flex-col border rounded-xl border-gray-300 max-w-[90%]
                        shadow-md shadow-gray-300 p-2"
                >
                    <Link to="/" className="self-start font-bold hover:underline">Denis</Link>
                    Amazing! Super easy and tasty ;)
                </p>
            </div>
        </section>
    );
}

export default CommentList;