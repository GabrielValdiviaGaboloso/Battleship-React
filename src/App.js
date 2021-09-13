import logo from './logo.svg';
import './App.css';
import Home from './componente/Home';
import Mapa from './componente/Mapa';

function App() {
  // 0 = vacío 
  // 1 = parte de un barco 
  // 2 = una parte hundida de un barco 
  // 3 = un disparo fallido 
  let gameBoard = [
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
  ];

  return (
    <>

      {/* <div className="col-6"> <Home /></div> */}
      <div className="container"><Mapa gameBoard={gameBoard} /></div>




    </>
  );
}

export default App;
