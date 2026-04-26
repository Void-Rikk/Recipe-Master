import type { User } from "../../../shared/utils/types.ts";
import { BASE_URL } from "../../../shared/constants/constants.ts";

interface IAuthService {
    login(firstName: string, lastName: string, password: string): Promise<User>;
    register(firstName: string, lastName: string, password: string): Promise<User>;
}


class Services implements IAuthService {

    async login(firstName: string, lastName: string, password: string): Promise<User> {
        const response = await fetch(`${BASE_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                password: password
            }),
        });

        if (response.status === 401) {
            throw new Error("Invalid name/password");
        }

        if (response.status === 500) {
            throw new Error("Internal server error");
        }

        if (!response.ok) {
            throw new Error("Unknown error");
        }

        return await response.json();
    }

    async register(firstName: string, lastName: string, password: string): Promise<User> {
        const response = await fetch(`${BASE_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                password: password
            })
        });

        if (response.status === 409) {
            throw new Error("User already exists");
        }

        if (response.status === 500) {
            throw new Error("Internal server error");
        }

        if (!response.ok) {
            throw new Error("Unknown error");
        }

        return await response.json();
    }
}

export default new Services();