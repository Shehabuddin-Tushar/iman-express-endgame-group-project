import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import BlogsHome from "./Component/Blogs/BlogsHome/BlogsHome";
import ProductPage from "./Component/MerchanterProduct/ProductPage";
import Nav from "./DashBoard/Dashboard/Dashboard";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import Merchant from "./Pages/Merchant/Merchant";
import Rider from "./Pages/Rider/Rider";
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
          <Route path="/dashboard" element={<Nav />}></Route>
          <Route
            path="/merchantproduct"
            element={<ProductPage></ProductPage>}
          ></Route>
          <Route path="/rider" element={<Rider></Rider>}></Route>
          <Route path="/moreBlogs" element={<BlogsHome></BlogsHome>}></Route>
          <Route path="/contactUs" element={<ContactUs></ContactUs>}></Route>

          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/merchant" element={<Merchant></Merchant>}></Route>
          <Route
            path="/merchantproduct"
            element={<ProductPage></ProductPage>}
          ></Route>
          <Route path="/rider" element={<Rider></Rider>}></Route>
          <Route path="/moreBlogs" element={<BlogsHome></BlogsHome>}></Route>
          <Route path="/contactUs" element={<ContactUs></ContactUs>}></Route>
          <Route path="/aboutUs" element={<AboutUs></AboutUs>}></Route>
          <Route
            path="/product/:productDetail"
            element={<ProductPage />}
          ></Route>
          <Route path="/dashboard" element={<Nav />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
