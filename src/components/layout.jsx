import { NavBar } from "./navbar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <>
        <NavBar />
        <main>
            <Outlet/>
        </main>
        </>
    )
}