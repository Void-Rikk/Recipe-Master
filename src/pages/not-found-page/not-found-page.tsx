import { Link } from "react-router";

function NotFoundPage() {

    return (
        <div
            className="flex flex-col gap-4 text-4xl mt-10"
        >
            <span
                className="text-red-500"
            >
                404 Not Found
            </span>
            <Link
                to="/"
                className="underline-offset-4 hover:cursor-pointer hover:underline"
            >
                Back To Home
            </Link>
        </div>
    );
}

export default NotFoundPage;