import "./App.css";
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Services from "./Component/BikeServices/Services";
import Blogs from './Component/Blogs/Blogs';
import Products from './Component/Products/Products';
import MySlider from './Component/Slider/MySlider';
import Footer from './Shared/Footer/Footer';
import Navbar from './Shared/Navbar/Navbar';
import OurPartnerSlider from './Component/OurPartner/OurPartner';
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import BlogsHome from "./Component/Blogs/BlogsHome/BlogsHome";
import BlogDetails from "./Component/Blogs/BlogDetails/BlogDetails";
import Merchant from "./Pages/Merchant/Merchant";
import Rider from "./Pages/Rider/Rider";
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
             <Route path="/moreBlogs" element={<BlogsHome></BlogsHome>}></Route>
             <Route path="/blogDetails/:id" element={<BlogDetails></BlogDetails>}></Route>
             <Route path="/merchant" element={<Merchant></Merchant>}></Route>
            <Route path="/rider" element={<Rider></Rider>}></Route>
            <Route path="/contactUs" element={<ContactUs></ContactUs>}></Route>
            <Route path="/aboutUs" element={<AboutUs></AboutUs>}></Route>
         </Routes>
      </Router>
      
    </div>)







}
export default App;
