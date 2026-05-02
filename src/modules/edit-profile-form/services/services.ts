import { BASE_URL } from "../../../shared/constants/constants.ts";

type EditResponse = {
    status: string;
}

interface IEditProfileService {
    editProfile(userId: number, formData: FormData): Promise<EditResponse>;
}

class EditProfileService implements IEditProfileService {

    async editProfile(userId: number, formData: FormData): Promise<EditResponse> {
        const response = await fetch(`${BASE_URL}/updateUser/${userId}`, {
            method: "PATCH",
            body: formData
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return response.json();
    }
}

export default new EditProfileService();