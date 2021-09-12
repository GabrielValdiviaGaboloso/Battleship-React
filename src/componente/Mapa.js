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
        setGameBoard(() => {
            return stateGameBoard;
        });

        console.log(stateGameBoard);
    }

    return (
        <div className="mapa p-5">
            <div className="container">
                {stateGameBoard.map((value, index) => {
                    return value.map((subValue, i) => {
                        return <button key={i} className={`botton + btn-${subValue}`} onClick={() => fireTorpedo(index, i)}></button>
                    })
                })}
            </div>

        </div>
    );
}

export default Mapa;