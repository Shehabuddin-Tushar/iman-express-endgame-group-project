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


import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import Account from "./Pages/Merchant/Account";



import "./App.css";
import AddBlog from "./DashBoard/DashboardHome/AddBlog/AddBlog";
import UpdateBlog from "./DashBoard/DashboardHome/AddBlog/UpdateBlog/UpdateBlog";
import ManageBlog from "./DashBoard/DashboardHome/ManageBlog/ManageBlog";
import Reviews from "./Component/Reviews/Reviews";
import RiderRegistration from "./Pages/Rider/Rider";
import Checkout from "./Component/Cart/Checkout";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/merchantRegister" element={<Account />}></Route>
          <Route path="/riderRegister" element={<RiderRegistration></RiderRegistration>}></Route>
          <Route path="/moreBlogs" element={<BlogsHome></BlogsHome>}></Route>
          <Route path="/dashboard" element={<Nav />}></Route>
          <Route
            path="/merchantproduct"
            element={<ProductPage></ProductPage>}
          ></Route>
                  
          <Route path="/contactUs" element={<ContactUs></ContactUs>}></Route>
          <Route path="/checkout" element={<Checkout></Checkout>}></Route>
         
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
            
            {/* <Route
              path="/dashboard/rider/profile"
              element={<RiderAccount />}
            ></Route>
            <Route path="/dashboard/rider/setting" element={<RiderSetting />}></Route> */}
            <Route path="/dashboard/updateBlog/:blogId" element={<UpdateBlog></UpdateBlog>}></Route>
            <Route path="/dashboard/rate-us" element={<Reviews />}></Route>
            {/* <Route path="/dashboard/payment" element={<PaymentDash/>}></Route> */}
            <Route path="/dashboard/addBlog" element={<AddBlog />}></Route>
            <Route path="/dashboard/manageBlog" element={<ManageBlog/>}></Route>
          

            <Route
              path="/dashboard/marchant/add-products"
              element={<MarchantProducts />}
            ></Route>

            <Route
              path="/dashboard/marchant/manageproduct"
              element={<Manageporduct/>}
            ></Route>

          </Route>
        </Routes>
           

      
        
      </Router>

      <MessengerCustomerChat
        pageId="104547992167816"
        appId="3055318624707846"
      />
    </>
  );
}
export default App;
