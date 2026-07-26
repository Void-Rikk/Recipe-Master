import { useState } from "react";
import type { EditProfileFormState } from "../utils/types.ts";

export const useCreateEditProfileForm = () => useState<EditProfileFormState>({
    firstName: "",
    lastName: "",
    bio: "",
    image: null,
});