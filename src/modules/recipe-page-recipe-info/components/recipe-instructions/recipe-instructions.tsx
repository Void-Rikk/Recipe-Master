

function RecipeInstructions() {

    return (
        <section className="flex flex-col gap-1">
            <h3 className="text-xl">Instructions</h3>
            <ol className="list-decimal list-inside">
                <li>Boil pasta in salted water</li>
                <li>Fry pancetta until crispy</li>
                <li>Mix eggs and cheese</li>
                <li>Combine everything together</li>
            </ol>
        </section>
    );
}

export default RecipeInstructions;