import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Mapados from './componente/Mapados';
import Mapa from './componente/Mapa';

function App() {
  // 0 = vacío 
  // 1 = parte de un barco 
  // 2 = una parte hundida de un barco 
  // 3 = un disparo fallido 


  // tableros de juego 1
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
  // tableros de juego 2
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

  const [turno, setturnos] = useState(true);    // Estado de de turno para el juego

  const Cambiodeturnokaty = () => {            // funcion para cambiar turno usuario
    setturnos(true);
  }
  const Cambiodeturnomaquina = () => {        // funcion para cambiar turno maquina
    setturnos(false);
  }
  useEffect(() => {                           // funcion para 
    Cambiodeturnokaty()
  }, [turno]);

  return (
    <>
      <div className="container" >

        <div className="row">
          <h1 className="p-4">Turno de {turno ? 'Usuario' : 'Le toca maquina'}</h1>
          <div className="col-6" onClick={Cambiodeturnomaquina}>
            <h2>Tabla usuario</h2>
            <Mapa gameBoard={gameBoard} turno={turno} />

          </div>
          <div className="col-6" onClick={Cambiodeturnokaty}>
            <h2>Tabla maquina</h2>
            <Mapados maquina={Maquina} turno={turno} cambiar={Cambiodeturnokaty} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
