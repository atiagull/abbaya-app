import './App.css';
import ProductCardsHolder from './Components/ProductCardsHolder';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <ProductCardsHolder/>
    <Footer/>
    </div>
  );
}

export default App;
