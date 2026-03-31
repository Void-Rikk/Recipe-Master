import HeaderTitle from "../header-title/header-title.tsx";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar.tsx";
import OnAuthLinks from "../links/on-auth-links.tsx";
import NoAuthLinks from "../links/no-auth-links.tsx";


function Header() {
    const [isAuth] = useState<boolean>(true);
    const [username] = useState<string>("John Johnson");

    return (
        <header className="grid grid-cols-3 grid-rows-1 justify-items-center items-center">
            <HeaderTitle />
            <SearchBar />
            <div className="flex gap-4 justify-self-start">
                {isAuth
                    ? <OnAuthLinks username={ username } userID={'52'} />
                    : <NoAuthLinks />
                }
            </div>
        </header>
    );
}

export default Header;