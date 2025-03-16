import Footer from "@/components/custom/footer";
import Header from "@/components/custom/header";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet/>
            </main>

            <Footer/>
        </>
    );
}
 
export default Layout;