import { Box } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import AboutUs from './Pages/AboutUs/AboutUs';

function App() {
  return (
    <div>
      <Router>
         <Routes>
             <Route path="/" element={<Home></Home>}></Route>
             <Route path="/login" element={<Login></Login>}></Route>
             <Route path="/register" element={<Register></Register>}></Route>
             <Route path="/contactUs" element={<ContactUs></ContactUs>}></Route>
             <Route path="/aboutUs" element={<AboutUs></AboutUs>}></Route>
         </Routes>
      </Router>
      
    </div>)







}
export default App;
