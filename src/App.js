import { Box } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductPage from "./Component/MerchanterProduct/ProductPage";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";

function App() {
  return (
    <div>
      <Router>
         <Routes>
             <Route path="/" element={<Home></Home>}></Route>
             <Route path="/merchantproduct" element={<ProductPage/>}></Route>
             <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
           
         </Routes>
      </Router>
      
    </div>)







}
export default App;
