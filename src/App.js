import Services from "./Component/BikeServices/Services";
import Blogs from './Component/Blogs/Blogs';
import Products from './Component/Products/Products';
import MySlider from './Component/Slider/MySlider';
import Footer from './Shared/Footer/Footer';
import Navbar from './Shared/Navbar/Navbar';
import OurPartnerSlider from './Component/OurPartner/OurPartner';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";

import "./App.css";
import BlogsHome from "./Component/Blogs/BlogsHome/BlogsHome";
function App() {
  return (
    <div>
      <BrowserRouter>
         <Routes>
             <Route path="/" element={<Home></Home>}></Route>
             <Route path="/login" element={<Login></Login>}></Route>
             <Route path="/register" element={<Register></Register>}></Route>
             <Route path="/moreBlogs" element={<BlogsHome></BlogsHome>}></Route>
         </Routes>
      </BrowserRouter>
      
    </div>)
   
  
 
   
      
  
  
}
export default App;
