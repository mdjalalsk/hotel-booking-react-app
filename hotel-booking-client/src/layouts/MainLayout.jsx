import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
    return (
        <div className="container mx-auto sm:px-4 md:px-16">       
          <Header></Header>
            {
                <Outlet/>
            }
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;