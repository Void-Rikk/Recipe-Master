import HeaderTitle from "../header-title/header-title.tsx";
import OnAuthLinks from "../links/on-auth-links.tsx";
import NoAuthLinks from "../links/no-auth-links.tsx";
import { useAuth } from "../../../../shared/hooks/hooks.ts";


function Header() {
    const isAuth = useAuth();

    return (
        <header className="flex justify-center gap-4 w-full">
            <HeaderTitle />
            { isAuth
                ? <OnAuthLinks />
                : <NoAuthLinks />
            }
        </header>
    );
}

export default Header;