interface IAuthService {
    login(nickname: string, password: string): void;
    register(nickname: string, password: string, confirmPassword: string): void;
}

class AuthService implements IAuthService {

    login(nickname: string, password: string): void {
        console.log(nickname, password);
    }

    register(nickname: string, password: string, passwordConfirm: string): void {
        console.log(nickname, password, passwordConfirm);
    }
}

export default new AuthService();