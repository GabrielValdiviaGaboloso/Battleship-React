import React, { useState } from 'react'
import './home.css'

function Home() {


    const [a, aCount] = useState([1, 1, 1, 1, 1, 0, 0, 0, 0, 1]);
    const [b, bCount] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    const [c, cCount] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    const [d, dCount] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    const [e, eCount] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [f, fCount] = useState([1, 0, 0, 1, 1, 0, 0, 0, 0, 0]);
    const [g, gCount] = useState([1, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [h, hCount] = useState([1, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [i, iCount] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [j, jCount] = useState([1, 1, 1, 1, 0, 0, 0, 0, 0, 0]);

    const primer = () => {
        a[0] = 3
        aCount(a)
        console.log(a[0]);
    }
    const segundo = () => {
        a[1] = 4
        aCount(a)
        console.log(a[1]);
    }
    const [color, setColor] = useState({
        azul: "clue",
        cafe: "barco",
        rojo: "acierto",
        celeste: "falla"
    });
    console.log(a[0]);
    console.log(a[1]);
    return (

        <>
            <div className="container ">
                <div className="row tabla" >
                    <div className="col-1 cuadrados" >
                        <button >{a[0]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{a[1]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{a[2]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{a[3]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{a[4]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{a[5]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{a[6]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{a[7]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{a[8]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{a[9]}</button>
                    </div>
                </div>
                <div className="row tabla" >
                    <div className="col-1 cuadrados ">
                        <button >{b[0]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{b[1]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{b[2]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{b[3]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{b[4]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{b[5]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{b[6]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{b[7]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{b[8]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{b[9]}</button>
                    </div>
                </div>
                <div className="row tabla" >
                    <div className="col-1 cuadrados ">
                        <button >{c[0]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{c[1]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{c[2]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{c[3]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{c[4]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{c[5]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{c[6]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{c[7]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{c[8]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{c[9]}</button>
                    </div>
                </div>
                <div className="row tabla" >
                    <div className="col-1 cuadrados ">
                        <button >{d[0]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{d[1]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{d[2]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{d[3]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{d[4]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{d[5]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{d[6]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{d[7]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{d[8]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{d[9]}</button>
                    </div>
                </div>
                <div className="row tabla" >
                    <div className="col-1 cuadrados ">
                        <button >{e[0]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{e[1]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{e[2]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{e[3]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{e[4]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{e[5]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{e[6]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{e[7]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{e[8]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{e[9]}</button>
                    </div>
                </div>
                <div className="row tabla" >
                    <div className="col-1 cuadrados ">
                        <button >{f[0]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{f[1]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{f[2]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{f[3]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{f[4]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{f[5]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{f[6]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{f[7]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{f[8]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{f[9]}</button>
                    </div>
                </div>
                <div className="row tabla" >
                    <div className="col-1 cuadrados ">
                        <button >{g[0]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{g[1]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{g[2]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{g[3]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{g[4]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{g[5]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{g[6]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{g[7]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{g[8]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{g[9]}</button>
                    </div>
                </div>
                <div className="row tabla" >
                    <div className="col-1 cuadrados ">
                        <button >{h[0]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{h[1]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{h[2]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{h[3]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{h[4]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{h[5]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{h[6]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{h[7]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{h[8]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{h[9]}</button>
                    </div>
                </div>
                <div className="row tabla" >
                    <div className="col-1 cuadrados ">
                        <button >{i[0]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{i[1]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{i[2]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{i[3]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{i[4]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{i[5]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{i[6]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{i[7]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{i[8]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{i[9]}</button>
                    </div>
                </div>
                <div className="row tabla" >
                    <div className="col-1 cuadrados ">
                        <button >{j[0]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{j[1]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{j[2]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{j[3]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{j[4]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{j[5]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{j[6]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{j[7]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{j[8]}</button>
                    </div>
                    <div className="col-1 cuadrados ">
                        <button >{j[9]}</button>
                    </div>
                </div>
                <button onClick={primer}> prueba</button>
                <button onClick={segundo}> prueba</button>


            </div >

        </>
    )
}

export default Home
