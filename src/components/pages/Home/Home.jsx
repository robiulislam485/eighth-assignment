import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import Banner from "../../Banner/Banner";
import BannerImg from "../../BannerImg/BannerImg";





const Home = () => {
    const categories = useLoaderData();

    return (
        <>
            <div className="bg-[#9538E2] rounded-b-lg max-w-[1500px] mx-auto ">
                <Banner></Banner>
            </div>
            <div className="absolute left-[130px] top-[420px]">
                <BannerImg></BannerImg>
            </div>


            <div className="mt-96">
                <h1 className="text-3xl font-bold text-center mb-16">Explore Cutting-Edge Gadgets</h1>
            </div>
            <div className="grid grid-cols-12 my-10 px-10">
                <div className="col-span-3">
                    

                    {
                        categories.map((category, index) => <NavLink key={index} className={({isActive})=> `flex flex-col items-center bg-base-200 px-2 py-2 shadow-lg rounded-full m-6 ${isActive ? 'bg-purple-700 text-white' : ''}`} to={`/category/${category.category}`}> {category.category}</NavLink>)
                    }

                </div>
                <div className="col-span-9">
                    <Outlet></Outlet>
                </div>
            </div>
            {/* <Categories categories={categories}></Categories> */}


        </>
    );
};

export default Home;