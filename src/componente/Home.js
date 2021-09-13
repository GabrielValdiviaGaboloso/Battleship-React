import React, { useState } from 'react'
import './home.css'

const Home = ({ maquina }) => {



    const [stateGameBoard, setGameBoard] = useState(maquina);






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

export default Home;