import Services from "./Component/BikeServices/Services";
import Blogs from './Component/Blogs/Blogs';
import Products from './Component/Products/Products';
import MySlider from './Component/Slider/MySlider';
import Footer from './Shared/Footer/Footer';
import Navbar from './Shared/Navbar/Navbar';
import OurPartnerSlider from './Component/OurPartner/OurPartner';
import "./App.css";


function App() {
  return (
    <div className="App">
      <Navbar />
      <MySlider />
      <Services />
      <Products />
      <Blogs></Blogs>
      <OurPartnerSlider></OurPartnerSlider>
      <Footer></Footer>
    </div>)
   
  
 
}
export default App;
