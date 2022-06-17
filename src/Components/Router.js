import React from 'react' 
import Footer from './Footer'; 
import Pizza from '../PizzaApp/Pizza';
import Navigate from  "../PizzaApp/Navigte";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from '../PizzaApp/Products'; 
import Cart from '../PizzaApp/Cart'; 

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Navigate /> 
        <Routes>   
          <Route path="/" element={<Pizza />} ></Route>
          <Route path="Products" element={<Products />} > </Route>
          <Route path="Cart" element={<Cart />} > </Route> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  ) 
} 
export default Router;
