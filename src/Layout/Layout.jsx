import Banner from "../components/Banner/Banner";
import NavBar from "../components/NavBar/NavBar";
import BannerImg from "../components/BannerImg/BannerImg";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";





const Layout = () => {
    
    
    return (
        <div className="max-w-[1500px] mx-auto">
            <Toaster />
            <div>
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