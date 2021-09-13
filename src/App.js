import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
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


  const [turno, setturnos] = useState(true);




  return (
    <>

      <div className="container">
        <div className="row">
          <div>turno de {turno ? 'katy' : 'maquina'}</div>
          <div className="col-6">
            <Mapa gameBoard={gameBoard} turno={turno} />

          </div>
          <div className="col-6">
            <Home maquina={Maquina} turno={turno} />
          </div>

        </div>
      </div>




    </>
  );
}

export default App;
