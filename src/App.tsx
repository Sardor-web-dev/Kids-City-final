import Footer from "./components/custom/footer"
import Header from "./components/custom/header"
import About from "./containers/about"
import Best from "./containers/best"
import Main from "./containers/main"
import Photos from "./containers/photos"
import Products from "./containers/products"

function App() {
  return (
    <>
    <div className="flex flex-col items-center justify-center">
      <Header/>
      <Main/>
      <Products/>
        <About/>
        <Best/>
        <Photos/>
        <Footer/>
    </div>
    </>
  )
}

export default App
