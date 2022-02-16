import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import Merchant from "./Pages/Merchant/Merchant";
import Rider from "./Pages/Rider/Rider";

function App() {
  return (
    <div className="App">
      {/* <Reviews></Reviews> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/merchant" element={<Merchant></Merchant>}></Route>
          <Route path="/rider" element={<Rider></Rider>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
