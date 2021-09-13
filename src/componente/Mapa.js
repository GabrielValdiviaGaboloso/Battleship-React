import React, { useState } from 'react';
import './mapa.css';

function Mapa() {
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

    const [stateGameBoard, setGameBoard] = useState(gameBoard);

    const fireTorpedo = (index, subIndex) => {
        let state = stateGameBoard[index][subIndex];
        if (state === 1) {
            stateGameBoard[index][subIndex] = 2;
        }
        if (state === 0) {
            stateGameBoard[index][subIndex] = 3;
        }
        cambiarcolora(() => {
            return stateGameBoard;
        });
        cambiarcolora()

    }
    const cambiarcolora = () => {
        setGameBoard((prevState) => {
            return {
                ...prevState,
                stateGameBoard
            };
        });
        console.log(stateGameBoard);
    };





    return (
        <div className="mapa p-5">
            {stateGameBoard.map((value, index) => {
                return value.map((subValue, i) => {
                    return <div key={i} className={`botton + btn-${subValue}`} onClick={() => fireTorpedo(index, i)}>{value[i]}</div>
                })
            })}
        </div>
    );
}

export default Mapa;