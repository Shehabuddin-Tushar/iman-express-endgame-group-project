
import "./App.css";
import Services from "./Component/BikeServices/Services";
import Products from './Component/Products/Products';
import MySlider from './Component/Slider/MySlider';
import Navbar from './Shared/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MySlider />
      <Services />
      <Products />
    </div>
  );
}

export default App;
