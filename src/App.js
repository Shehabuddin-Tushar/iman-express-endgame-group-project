import './App.css';
import Products from './Component/Products/Products';
import MySlider from './Component/Slider/MySlider';
import Navbar from './Shared/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MySlider />
      <Products />
    </div>
  );
}

export default App;
