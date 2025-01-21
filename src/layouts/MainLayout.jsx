import { Outlet } from "react-router";
import AppNavbar from "../components/AppNavbar";
import Footer from "../components/Footer";
import CardRightSide from "../components/CardRightSide";

export default function MainLayout() {
    return (
        <>
            <AppNavbar/>
            <div >
                <div>
                    <Outlet/>
                </div>
                
            </div>
            <Footer/>
        </>
    )
}