import Banner from "../components/Banner/Banner";
import NavBar from "../components/NavBar/NavBar";
import BannerImg from "../components/BannerImg/BannerImg";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";





const Layout = () => {
    return (
        <div>
            <div className="bg-[#9538E2] p-6 rounded-t-lg max-w-[1440px] mx-auto mt-4">
                <NavBar></NavBar>
            </div>
            <div className="min-h-[calc(100vh-268px)] ">



            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;