import Header from "./Components/header"
import AutoPlaySlideshow from "./Components/AutoPlaySlideshow";
import Home from "./Components/Home";
import AutoPlaySlideshowFooter from "./Components/AutoPlaySlideshowfooter";
import Footer from "./Components/Footer";
import {Route, Routes } from "react-router-dom";
import ProductDetail from "./Components/ProductDetail";
import ProductsPage from "./Components/ProductPage";


function App() {

  return (
    <>

    <Header/>
    <AutoPlaySlideshow/>
    <Home/>
    <AutoPlaySlideshowFooter/>
    <Footer/>
    <Routes>
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/productpage" element={<ProductsPage />} />
      
      
    </Routes>
    </>
  )
}

export default App
