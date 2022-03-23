import React, {useState} from 'react';
import MessengerCustomerChat from "react-messenger-customer-chat";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogsHome from "./Component/Blogs/BlogsHome/BlogsHome";
import BlogDetails from "./Component/Blogs/BlogDetails/BlogDetails";
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
import RiderAccount from './DashBoard/Rider/RiderAccount'
import RiderSetting from './DashBoard/Setting/RiderSetting'
import AddBlog from "./DashBoard/DashboardHome/AddBlog/AddBlog";
import UpdateBlog from "./DashBoard/DashboardHome/AddBlog/UpdateBlog/UpdateBlog";
import ManageBlog from "./DashBoard/DashboardHome/ManageBlog/ManageBlog";
import Updatemerchantproduct from "./DashBoard/Dashboard/Updatemerchantproduct/Updatemerchantproduct";
import Merchantprofile from "./DashBoard/Dashboard/Merchantprofile/Merchantprofile";
import RiderRegistration from "./Pages/Rider/Rider";
import Checkout from "./Component/Cart/Checkout";
import "./App.css";
import Success from './Component/SSL/Success/Success';
import AddPartner from './DashBoard/AddPartner/AddPartner';
import ManagePartner from './DashBoard/DashboardHome/ManagePartner/ManagePartner';
import FailedPayment from './Component/SSL/FailedPayment/FailedPayment';
import Review from "./DashBoard/User/Review";
import Authprovider from './Hooks/Context'
import PrivateRoute from "./Privateroute/PrivateRoute";
import PrivateRouteMerchant from "./Privateroute/PrivateRouteMerchant";
import PrivateRouteRider from "./Privateroute/PrivateRouteRider";
import MyOrder from "./DashBoard/DashboardHome/MyOrder/MyOrder";
import Allriders from "./Pages/Allriders/Allriders";
import Allusers from "./Pages/Allusers/Allusers";
import AllOrders from './DashBoard/DashboardHome/AllOrders/AllOrders';
import Merchantorders from "./DashBoard/Dashboard/Merchantsorders/Merchantorders";
import MakeAdmin from "./DashBoard/DashboardHome/MakeAdmin/MakeAdmin";
import AllUser from "./DashBoard/DashboardHome/AllUser/AllUser";
import AllMarchent from "./DashBoard/DashboardHome/AllMarchent/AllMarchent";
import AllAdmin from "./DashBoard/DashboardHome/AllAdmin/AllAdmin";

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode? "App": ""}>
      <Authprovider>
       
       <Router>
        <Routes>
          <Route path="/" element={<Home setDarkMode={setDarkMode} darkMode={darkMode}></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/merchantRegister" element={<Account />}></Route>
          <Route path="/riderRegister" element={<RiderRegistration></RiderRegistration>}></Route>
          <Route path="/moreBlogs" element={<BlogsHome></BlogsHome>}></Route>
          <Route path="/blogDetails/:id" element={<BlogDetails></BlogDetails>}></Route>
          <Route path="/dashboard" element={<Nav />}></Route>
          {/* success  */}
          <Route path="/success/:id" element={<Success />}></Route>
          <Route path="/failed" element={<FailedPayment />}></Route>
            <Route path="/allriders" element={<PrivateRoute><Allriders /></PrivateRoute>}></Route>
            <Route path="/allusers" element={<PrivateRouteRider><Allusers /></PrivateRouteRider>}></Route>
          <Route
            path="/merchantproduct/:id"
            element={<ProductPage></ProductPage>}
          ></Route>
                  
          <Route path="/contactUs" element={<ContactUs></ContactUs>}></Route>
            <Route path="/checkout/:id" element={<PrivateRoute><Checkout></Checkout></PrivateRoute>}></Route>
         
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

              <Route path="/dashboard/addPartner" element={<PrivateRoute><AddPartner /></PrivateRoute>}></Route>
              {/* My Order  */}
              <Route path="/dashboard/myOrder" element={<PrivateRoute><MyOrder /></PrivateRoute>}></Route>
              <Route path="/dashboard/allorders" element={<PrivateRoute><AllOrders /></PrivateRoute>}></Route>
            {/* manage partners  */}
          <Route path="/dashboard/managePartners" element={<PrivateRoute><ManagePartner /></PrivateRoute>}></Route>
          {/* make admin  */}
          <Route path="/dashboard/makeadmin" element={<PrivateRoute><MakeAdmin/></PrivateRoute>}></Route>
          {/* ALl user  */}
          <Route path="/dashboard/allusers" element={<PrivateRoute><AllUser/></PrivateRoute>}></Route>
            {/* All marchent  */}
            <Route path="/dashboard/allmarchent" element={<PrivateRoute><AllMarchent /></PrivateRoute>}></Route>
            {/* all admins  */}
            <Route path="/dashboard/alladmin" element={<PrivateRoute><AllAdmin /></PrivateRoute>}></Route>
            <Route
           path="/dashboard/rider/profile"
                element={<PrivateRouteRider><RiderAccount /></PrivateRouteRider>}
           ></Route>
              <Route path="/dashboard/rider/setting" element={<PrivateRouteRider><RiderSetting /></PrivateRouteRider>}></Route>
            <Route path="/dashboard/updateBlog/:blogId" element={<UpdateBlog></UpdateBlog>}></Route>
            <Route path="/dashboard/rate-us" element={<Review></Review>}></Route>
          
            {/* <Route path="/dashboard/payment" element={<PaymentDash/>}></Route> */}
            <Route path="/dashboard/addBlog" element={<PrivateRoute><AddBlog /></PrivateRoute>}></Route>
              <Route path="/dashboard/manageBlog" element={<PrivateRoute><ManageBlog /></PrivateRoute>}></Route>
            <Route
              path="/dashboard/marchant/profile"
                element={<PrivateRouteMerchant><Merchantprofile /></PrivateRouteMerchant>}
            ></Route>

            <Route
              path="/dashboard/marchant/add-products"
                element={<PrivateRouteMerchant><MarchantProducts /></PrivateRouteMerchant>}
            ></Route>

            <Route
              path="/dashboard/marchant/manageproduct"
              element={<PrivateRouteMerchant><Manageporduct/></PrivateRouteMerchant>}
            ></Route>

            <Route
              path="/dashboard/marchant/updateproduct/:id"
              element={<PrivateRouteMerchant><Updatemerchantproduct/></PrivateRouteMerchant>}
            ></Route>

              
              <Route
                path="/dashboard/marchant/manageorders"
                element={<PrivateRouteMerchant><Merchantorders /></PrivateRouteMerchant>}
              ></Route>
          </Route>
        </Routes>
       </Router>
       
      </Authprovider>
         {/* pageId="104547992167816"
        appId="3055318624707846" */}
        {/* 101209389196237 292099619137695*/}
      <MessengerCustomerChat
        pageId="101209389196237"
        appId="292099619137695" 
      />
    </div>
  );
}
export default App;
