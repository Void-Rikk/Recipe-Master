import { BrowserRouter, Routes, Route } from "react-router";
import AuthPage from "./pages/auth-page/auth-page.tsx";
import HomePage from "./pages/home-page/home-page.tsx";


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={ <HomePage /> } />
                <Route path={"/auth"} element={ <AuthPage /> }/>
                <Route path={"/user/:id"} />
                <Route path={"/user/edit/:id"} />
                <Route path={"/create"} />
                <Route path={"/recipe/:id"} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;