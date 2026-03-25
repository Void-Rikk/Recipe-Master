interface IAuthService {
    login(nickname: string, password: string): void;
    register(nickname: string, password: string, confirmPassword: string): void;
}

class AuthService implements IAuthService {

    login(nickname: string, password: string): void {

    }

    register(nickname: string, password: string, passwordConfirm: string): void {

    }
}

export default new AuthService();