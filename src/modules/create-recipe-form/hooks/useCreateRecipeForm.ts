import { useState } from "react";
import type { CreateRecipeFormType } from "../utils/types.ts";
import { initialFormState } from "../constants/constants.ts";


export const useCreateRecipeForm = () => useState<CreateRecipeFormType>(initialFormState);