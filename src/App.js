import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
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

  let Maquina = [
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1]
  ];

  const [turno, setturnos] = useState(true);

  const Cambiodeturnokaty = () => {
    setturnos(true);
  }
  const Cambiodeturnomaquina = () => {
    setturnos(false);
  }
  useEffect(() => {
    Cambiodeturnokaty()
  }, [turno]);

  return (
    <>
      <div className="container" >
        <div className="row">
          <div lassName="col-1">Turno de {turno ? 'Usuario' : 'Le toca maquina'}</div>
          <div className="col-6" onClick={Cambiodeturnomaquina}>
            <Mapa gameBoard={gameBoard} turno={turno} />

          </div>
          <div className="col-6" onClick={Cambiodeturnokaty}>
            <Home maquina={Maquina} turno={turno} cambiar={Cambiodeturnokaty} />
          </div>
        </div>
      </div>




    </>
  );
}

export default App;
