import React, { useState, useEffect } from 'react'
import './home.css'

const Home = (props) => {



    const [stateGameBoard, setGameBoard] = useState(props.maquina);



    const fireTorpedo = (index, subIndex) => {
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



    useEffect(() => {
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
                            return <div className={` botton + btn-${subCelda}`} key={subIndex}   >

                            </div>
                        })
                    })}
                </div> : <div className="row">
                    {stateGameBoard.map((celda, index) => {
                        return celda.map((subCelda, subIndex) => {
                            return <div className={` botton + btn-${subCelda}`} key={subIndex}   >
                            </div>
                        })
                    })}
                </div>}



            </div>
        </>
    );
};

export default Home;