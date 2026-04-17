interface IAuthService {
    login(firstName: string, lastName: string, password: string): void;
    register(firstName: string, lastName: string, password: string): void;
}

class AuthService implements IAuthService {

    login(firstName: string, lastName: string, password: string): void {

    }

    register(firstName: string, lastName: string, password: string): void {

    }
}

export default new AuthService();