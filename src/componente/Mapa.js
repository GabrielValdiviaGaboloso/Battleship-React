import React, { useState } from 'react';
import './mapa.css';
const Mapa = ({ gameBoard, turno }) => {

    console.log(turno);

    const [stateGameBoard, setGameBoard] = useState(gameBoard);

    const fireTorpedo = (index, subIndex) => {
        let state = stateGameBoard[index][subIndex];
        if (state === 1) {
            stateGameBoard[index][subIndex] = 2;
        }
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



    return (
        <>
            <div className="mapa">
                <div className="row">
                    {stateGameBoard.map((celda, index) => {
                        return celda.map((subCelda, subIndex) => {
                            return <div className={` botton + btn-${subCelda}`} key={subIndex} onClick={() => fireTorpedo(index, subIndex)}>
                            </div>
                        })
                    })}
                </div>

            </div>
        </>
    );
};

export default Mapa;