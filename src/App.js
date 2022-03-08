import MessengerCustomerChat from "react-messenger-customer-chat";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import BlogDetails from "./Component/Blogs/BlogDetails/BlogDetails";
import BlogsHome from "./Component/Blogs/BlogsHome/BlogsHome";
import ProductPage from "./Component/MerchanterProduct/ProductPage";
import Nav from "./DashBoard/Dashboard/Dashboard";
import Dashboardhome from "./DashBoard/Dashboard/Dashboardhome/Dashboardhome";
import Manageporduct from "./DashBoard/Dashboard/Manageproduct/Manageporduct";
import MarchantProducts from "./DashBoard/MarchantProducts/MarchantProducts";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import RiderAccount from "./Pages/Dashboard/Rider/RiderAccount";
import RiderSetting from "./Pages/Dashboard/Setting/RiderSetting";

import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import Account from "./Pages/Merchant/Account";

import Rider from "./Pages/Rider/Rider";

import "./App.css";
import AddBlog from "./DashBoard/DashboardHome/AddBlog/AddBlog";
import UpdateBlog from "./DashBoard/DashboardHome/AddBlog/UpdateBlog/UpdateBlog";
import ManageBlog from "./DashBoard/DashboardHome/ManageBlog/ManageBlog";
import Reviews from "./Component/Reviews/Reviews";
import Updatemerchantproduct from "./DashBoard/Dashboard/Updatemerchantproduct/Updatemerchantproduct";
import Merchantprofile from "./DashBoard/Dashboard/Merchantprofile/Merchantprofile";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/merchant" element={<Account />}></Route>
          <Route path="/rider" element={<Rider></Rider>}></Route>
          <Route path="/moreBlogs" element={<BlogsHome></BlogsHome>}></Route>
          <Route path="/dashboard" element={<Nav />}></Route>
          <Route
            path="/merchantproduct/:id"
            element={<ProductPage></ProductPage>}
          ></Route>
                  
          <Route path="/contactUs" element={<ContactUs></ContactUs>}></Route>
         
          <Route path="/aboutUs" element={<AboutUs></AboutUs>}></Route> 
          <Route
            path="/product/:productDetail"
            element={<ProductPage />}
          ></Route>
          
          <Route path="/dashboard" element={<Nav />}>
            <Route
              path="/dashboard/home"
              element={<Dashboardhome/>}
            ></Route>
            
            <Route
              path="/dashboard/rider/profile"
              element={<RiderAccount />}
            ></Route>
            <Route path="/dashboard/rider/setting" element={<RiderSetting />}></Route>
            <Route path="/dashboard/updateBlog" element={<UpdateBlog></UpdateBlog>}></Route>
            <Route path="/dashboard/rate-us" element={<Reviews />}></Route>
            {/* <Route path="/dashboard/payment" element={<PaymentDash/>}></Route> */}
            <Route path="/dashboard/addBlog" element={<AddBlog />}></Route>
            <Route path="/dashboard/manageBlog" element={<ManageBlog/>}></Route>
            <Route
              path="/dashboard/marchant/profile"
              element={<Merchantprofile />}
            ></Route>

            <Route
              path="/dashboard/marchant/add-products"
              element={<MarchantProducts />}
            ></Route>

            <Route
              path="/dashboard/marchant/manageproduct"
              element={<Manageporduct/>}
            ></Route>

            <Route
              path="/dashboard/marchant/updateproduct/:id"
              element={<Updatemerchantproduct/>}
            ></Route>

          </Route>
        </Routes>
           

      
        
      </Router>
         {/* pageId="104547992167816"
        appId="3055318624707846" */}
{/* 101209389196237 292099619137695*/}
      <MessengerCustomerChat
        pageId="101209389196237"
        appId="292099619137695" 
      />
    </>
  );
}
export default App;
