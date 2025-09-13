import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import Products from './Pages/Products'
import ProductDetails from './Pages/ProductDetails'
import Navbar from './Components/Navbar'


const App = () => {
  return (
    <BrowserRouter> 
      <Navbar />
      {/* <div className='pt-14'> */}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/productDetails/:id' element={<ProductDetails />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      {/* </div> */}

    </BrowserRouter>
  )
}

export default App

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Products from "./pages/Products";
// import ProductDetails from "./pages/ProductDetails";
// import Cart from "./pages/Cart";
