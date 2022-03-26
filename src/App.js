import './App.css';
import Description from './components/Description/Description';
import Header from './components/Header/Header';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Products></Products>
      <Description></Description>
    </div>
  );
}

export default App;