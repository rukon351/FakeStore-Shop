import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Components/Menubar/Menubar';
import AllProducts from './Components/AllProducts/AllProducts';
import { useState } from 'react';
import "aos/dist/aos.css";


function App() {
  const [count, setCount] = useState(0);

  const setCartCount = () => setCount(count + 1);

  return (
    <div className="App" >
      <Menubar count={count}></Menubar>
      <AllProducts setCartCount={setCartCount}></AllProducts>
    </div>
  );
}

export default App;
