import HeaderTitle from "../header-title/header-title.tsx";
import { useState } from "react";
import OnAuthLinks from "../links/on-auth-links.tsx";
import NoAuthLinks from "../links/no-auth-links.tsx";


function Header() {
    const [isAuth] = useState<boolean>(true);
    const [username] = useState<string>("John Johnson");

    return (
        <header className="flex justify-center gap-4 w-full">
            <HeaderTitle />
            {isAuth
                ? <OnAuthLinks username={ username } userID={'52'} />
                : <NoAuthLinks />
            }
        </header>
    );
}

export default Header;