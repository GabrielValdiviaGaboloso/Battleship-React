import React, { useState } from 'react'
import './home.css'

function Home() {
    let a = [1, 1, 1, 1, 1, 0, 0, 0, 0, 1]
    let b = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
    let c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
    let d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
    let e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let f = [1, 0, 0, 1, 1, 0, 0, 0, 0, 0]
    let g = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let h = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let j = [1, 1, 1, 1, 0, 0, 0, 0, 0, 0]

    console.log(a[0]);
    const pruebauno = () => {
        return a[0] = "78"
    }


    let gameBoard = [
        a,
        b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j
    ];

    const [count, setCount] = useState(gameBoard);
    console.log(count[0][5]);

    const [color, setColor] = useState({
        azul: "mar",
        cafe: "barco",
        rojo: "acierto",
        celeste: "falla"
    });
    console.log(a[0]);
    return (

        <>
            <div className="container ">
                <div className="row tabla" >
                    <div className="col-1 cuadrados "  >
                        {!!count && count.map((cuadros, index) => {
                            return <div className="objetivos" key={index}>
                                {cuadros[0]}
                            </div>
                        })}
                    </div>
                    <div className="col-1 cuadrados"  >
                        {!!count && count.map((cuadros, index) => {
                            return <div className="objetivos  " key={index}>
                                {cuadros[1]}
                            </div>
                        })}
                    </div>
                    <div className="col-1 cuadrados"  >
                        {!!count && count.map((cuadros, index) => {
                            return <div className="objetivos  " key={index}>
                                {cuadros[2]}
                            </div>
                        })}
                    </div>
                    <div className="col-1 cuadrados"  >
                        {!!count && count.map((cuadros, index) => {
                            return <div className="objetivos  " key={index}>
                                {cuadros[3]}
                            </div>
                        })}
                    </div>
                    <div className="col-1 cuadrados"  >
                        {!!count && count.map((cuadros, index) => {
                            return <div className="objetivos  " key={index}>
                                {cuadros[4]}
                            </div>
                        })}
                    </div>
                    <div className="col-1 cuadrados"  >
                        {!!count && count.map((cuadros, index) => {
                            return <div className="objetivos  " key={index}>
                                {cuadros[5]}
                            </div>
                        })}
                    </div>
                    <div className="col-1 cuadrados"  >
                        {!!count && count.map((cuadros, index) => {
                            return <div className="objetivos  " key={index}>
                                {cuadros[6]}
                            </div>
                        })}
                    </div>
                    <div className="col-1 cuadrados"  >
                        {!!count && count.map((cuadros, index) => {
                            return <div className="objetivos  " key={index}>
                                {cuadros[7]}
                            </div>
                        })}
                    </div>
                    <div className="col-1 cuadrados"  >
                        {!!count && count.map((cuadros, index) => {
                            return <div className="objetivos  " key={index}>
                                {cuadros[8]}
                            </div>
                        })}
                    </div>
                    <div className="col-1 cuadrados"  >
                        {!!count && count.map((cuadros, index) => {
                            return <div className="objetivos  " key={index}>
                                {cuadros[9]}
                            </div>
                        })}
                    </div>
                </div>
                <button onClick={pruebauno}>prueba</button>
                <div className="container" >
                    <div className="row" >
                        <div className="col-1">78</div>
                        <div className="col-1">3</div>
                        <div className="col-1">3</div>
                        <div className="col-1">3</div>
                        <div className="col-1">3</div>
                        <div className="col-1">3</div>
                        <div className="col-1">3</div>
                        <div className="col-1">3</div>
                        <div className="col-1">3</div>
                        <div className="col-1">3</div>
                        <div className="col-1">3</div>
                    </div>
                    <div className="row " >
                        <div className="col-1">34</div>
                        <div className="col-1">45</div>
                        <div className="col-1">45</div>
                        <div className="col-1">45</div>
                        <div className="col-1">4</div>
                        <div className="col-1">6</div>
                        <div className="col-1">6</div>
                        <div className="col-1">6</div>
                        <div className="col-1">6</div>
                        <div className="col-1">66</div>
                        <div className="col-1"></div>
                    </div>
                    <div className="row" >
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                    </div>
                    <div className="row" >
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                    </div>
                    <div className="row ">
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                    </div>
                    <div className="row ">
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                        <div className="col-1"></div>
                    </div>

                </div>

            </div >

        </>
    )
}

export default Home
