import About from "@/containers/about";
import Best from "@/containers/best";
import Main from "@/containers/main";
import Photos from "@/containers/photos";
import Products from "@/containers/products";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Main />
        <Products />
        <About />
        <Best />
        <Photos />
      </div>
    </>
  );
};

export default Home;
