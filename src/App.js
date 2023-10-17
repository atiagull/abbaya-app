import logo from './logo.svg';
import './App.css';
import ProductCard from './Components/ProductCard';
import ProductCardsHolder from './Components/ProductCardsHolder';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <ProductCardsHolder/>
    </div>
  );
}

export default App;
