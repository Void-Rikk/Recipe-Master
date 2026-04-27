import type { Instruction } from "../../utils/types.ts";


interface RecipeInstructionsProps {
    instructions: Instruction[];
}

function RecipeInstructions({ instructions }: RecipeInstructionsProps) {

    return (
        <section className="flex flex-col gap-1">
            <h3 className="text-xl">Instructions</h3>
            <ol className="list-decimal list-inside">
                {
                    instructions.map(instruction => (
                        <li
                            key={ instruction.id }
                        >
                            { instruction.description }
                        </li>
                    ))
                }
            </ol>
        </section>
    );
}

export default RecipeInstructions;