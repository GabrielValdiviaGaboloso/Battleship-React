import logo from './logo.svg';
import './App.css';
import Home from './componente/Home';
import Mapa from './componente/Mapa';

function App() {
  return (
    <div className="App position-absolute top-50 start-50 translate-middle">
      <Home />
      <Mapa />
    </div>
  );
}

export default App;
