import type { Dispatch, SetStateAction } from "react";

type SwitchRecipesStateFn = (recipesState: "my" | "liked",
                          setRecipesState: Dispatch<SetStateAction<"my" | "liked">>,
                          buttonName: "my" | "liked") => void;

const switchRecipesState: SwitchRecipesStateFn =
    (recipesState,
     setRecipesState,
     buttonName) => {

        if (recipesState === buttonName) {
            return;
        }

        if (recipesState === "my") {
            setRecipesState("liked");
        }
        else {
            setRecipesState("my");
        }
    }

export { switchRecipesState };