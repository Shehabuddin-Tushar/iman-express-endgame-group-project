
import "./App.css";
import Services from "./Component/BikeServices/Services";
import Blogs from './Component/Blogs/Blogs';
import Products from './Component/Products/Products';
import MySlider from './Component/Slider/MySlider';
import Footer from './Shared/Footer/Footer';
import Navbar from './Shared/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MySlider />
      <Services />
      <Products />
      <Blogs></Blogs>
      <Footer></Footer>
    </div>)
}
export default App;
