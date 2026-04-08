import Pic from "../../../napoleon-test-image.png"
import { Link, useParams } from "react-router";
import { ChevronLeft, CircleUserRound, Heart } from "lucide-react";
import Button from "../../shared/components/button/button.tsx";
import { type SubmitEventHandler, useState } from "react";


function RecipePage() {
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [comment, setComment] = useState<string>("");

    const { recipeId }  = useParams<{ recipeId: string }>();

    const toggleLike = () => {
        setIsLiked(prev => !prev);
    }

    const handleSendComment: SubmitEventHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div
            className="flex flex-col gap-4 w-[60%] rounded-md
            mt-2 mb-2 p-4 shadow-[1px_1px_5px_1px] shadow-gray-300 relative
            max-md:w-full max-md:mt-0 max-md:rounded-none max-md:shadow-none"
        >
            <figure className="self-center max-w-[80%]">
                <img className="rounded-2xl shadow-[1px_1px_5px_1px] max-h-80 aspect-video shadow-gray-400" src={ Pic } alt="recipe-picture" />
            </figure>
            <main className="flex flex-col gap-4 pl-[5%]">
                <h1 className="text-3xl">
                    Spaghetti Carbonara { recipeId }
                </h1>
               <p className="text-lg text-gray-500 leading-6">
                   A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.
               </p>
               <section className="flex flex-col gap-1">
                   <h3 className="text-xl">
                       Ingredients
                   </h3>
                   <ul className="list-disc list-inside">
                       <li>200g spaghetti</li>
                       <li>100g pancetta</li>
                       <li>2 eggs</li>
                       <li>50g parmesan</li>
                       <li>Black pepper</li>
                   </ul>
               </section>
               <section className="flex flex-col gap-1">
                   <h3 className="text-xl">Instructions</h3>
                   <ol className="list-decimal list-inside">
                       <li>Boil pasta in salted water</li>
                       <li>Fry pancetta until crispy</li>
                       <li>Mix eggs and cheese</li>
                       <li>Combine everything together</li>
                   </ol>
               </section>
               <section className="flex items-center gap-2">
                   <CircleUserRound className="w-8 h-8"/>
                   <Link
                       to="/"
                       className="text-lg hover:underline"
                   >
                       John Johnson
                   </Link>
               </section>
                <Button
                    className="p-0 bg-transparent text-black hover:bg-transparent
                   self-start flex items-center gap-2
                   hover:cursor-pointer active:scale-110 transition-[all_ease-in_0.1s]"
                    onClick={ toggleLike }
                >
                    <Heart
                        className={`${isLiked && "fill-black"}`}
                    />
                    14
                </Button>
           </main>
            <form
                className="flex items-center gap-4 pl-[5%]"
                onSubmit={ handleSendComment }
            >
                <textarea
                    placeholder="Write a comment"
                    className="p-2 rounded-xl text-white bg-gray-900
                    shadow shadow-gray-600
                    resize-none grow-1 placeholder:text-gray-300"
                    value={ comment }
                    onChange={ (e) => setComment(e.target.value) }
                ></textarea>
                <Button className="cursor-pointer transition-all
                shadow shadow-gray-600 h-[80%]
                hover:translate-y-[-2px] hover:shadow-md">
                    Send
                </Button>
            </form>
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

            <Link
                to="/"
                className="absolute left-3 top-3"
            >
                <ChevronLeft />
            </Link>
        </div>
    );
}

export default RecipePage;