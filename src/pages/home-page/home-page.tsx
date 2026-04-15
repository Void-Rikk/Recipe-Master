import { Header } from "../../modules/home-page-header";
import { RecipeCard } from "../../modules/recipe-card";
import SearchBar from "../../modules/home-page-header/components/search-bar/search-bar.tsx";
import { ChevronUp } from "lucide-react";


const testCard = [
    {id: "1", name: "Spaghetti", author: {id: "1", firstname: "John", lastname: "Johnson"}, likes: 12, isLiked: false},
    {id: "2", name: "Burger", author: {id: "2", firstname: "Ken", lastname: "Clash"}, likes: 2, isLiked: true},
    {id: "3", name: "Pickles", author: {id: "3", firstname: "Alex", lastname: "Melikh"}, likes: 10, isLiked: false},
    {id: "4", name: "Pizza", author: {id: "4", firstname: "Danil", lastname: "Bratsev"}, likes: 5, isLiked: true},
    {id: "5", name: "Pasta", author: {id: "5", firstname: "Bruh", lastname: "Bruhov"}, likes: 0, isLiked: false},
    {id: "6", name: "Cake", author: {id: "6", firstname: "Lian", lastname: "Li"}, likes: 34, isLiked: true},
    {id: "7", name: "Cake", author: {id: "6", firstname: "Lian", lastname: "Li"}, likes: 34, isLiked: true},
    {id: "8", name: "Cake", author: {id: "6", firstname: "Lian", lastname: "Li"}, likes: 34, isLiked: true}
];


function HomePage() {

    return (
        <div className="relative flex flex-col items-center gap-8 p-2">
            <Header />
            <main className="flex flex-col items-center gap-4 w-[80%]"
            >
                <SearchBar />
                <section className="flex flex-wrap gap-4">
                    {testCard.map(card => (
                        <RecipeCard
                            key={ card.id }
                            recipeID={ card.id }
                            recipeName={ card.name }
                            author={ card.author }
                            likes={ card.likes }
                            isLiked={ card.isLiked }
                        />
                    ))}
                </section>
            </main>
            <a
                className="
                fixed bottom-10 right-10
                bg-orange-100 p-2 rounded-full
                shadow shadow-orange-200
                border border-orange-300
                hover:cursor-pointer"
                onClick={ () => window.scrollTo({top: 0, behavior: "smooth"}) }
            >
                <ChevronUp />
            </a>
        </div>
    );
}

export default HomePage;