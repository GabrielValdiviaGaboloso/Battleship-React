import React, { useState, useEffect } from 'react'
import './home.css'

const Mapados = (props) => {

    const [stateGameBoard, setGameBoard] = useState(props.maquina);  //funcion de estado para el tablero

    const fireTorpedo = (index, subIndex) => {     //funcion para cambiar los cuadrados en la tabla
        let state = stateGameBoard[index][subIndex];
        if (state === 1) {
            stateGameBoard[index][subIndex] = 2;
        }
        if (state === 0) {
            stateGameBoard[index][subIndex] = 3;
        }

        setGameBoard(() => {

            return stateGameBoard
        });
    }

    useEffect(() => {                  //funcion para crear los numeros aleatorios en el que la maquina usara
        let cambio = props.turno
        let index = Math.floor(Math.random() * 10)
        let subIndex = Math.floor(Math.random() * 10)
        if (cambio === false) {
            fireTorpedo(index, subIndex)
        } if (cambio === true) {
            return
        }
    }, [props.turno]); // Solo se vuelve a ejecutar si turno cambia

    return (
        <>
            <div className="mapa">
                {props.turno ? <div className="row">
                    {stateGameBoard.map((celda, index) => {
                        return celda.map((subCelda, subIndex) => {
                            return <div className={` botton`} key={subIndex}   ><img src={`/${props.accion[subCelda]}`} key={subIndex} ></img>

                            </div>
                        })
                    })}
                </div> : <div className="row">
                    {stateGameBoard.map((celda, index) => {
                        return celda.map((subCelda, subIndex) => {
                            return <div className={` botton `} key={subIndex}   ><img src={`/${props.accion[subCelda]}`} key={subIndex} ></img>
                            </div>
                        })
                    })}
                </div>}



            </div>
        </>
    );
};

export default Mapados;