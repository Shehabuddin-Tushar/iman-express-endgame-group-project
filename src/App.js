import logo from './logo.svg';
import './App.css';
import Navbar from './Shared/Navbar/Navbar';
import MySlider from './Component/Slider/MySlider';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MySlider/>
    </div>
  );
}

export default App;
