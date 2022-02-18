
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import Merchant from "./Pages/Merchant/Merchant";
import Rider from "./Pages/Rider/Rider";
import BlogsHome from "./Component/Blogs/BlogsHome/BlogsHome";
import "./App.css";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AboutUs from './Pages/AboutUs/AboutUs';

function App() {
  return (
    <div>
      <Router>
         <Routes>
             <Route path="/" element={<Home></Home>}></Route>
             <Route path="/login" element={<Login></Login>}></Route>
             <Route path="/register" element={<Register></Register>}></Route>
             <Route path="/merchant" element={<Merchant></Merchant>}></Route>
            <Route path="/rider" element={<Rider></Rider>}></Route>
            <Route path="/moreBlogs" element={<BlogsHome></BlogsHome>}></Route>
             <Route path="/contactUs" element={<ContactUs></ContactUs>}></Route>
             <Route path="/aboutUs" element={<AboutUs></AboutUs>}></Route>
         </Routes>
      </Router>
      
    </div>)







}
export default App;
