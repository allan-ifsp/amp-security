import React, {useEffect, useState} from "react";

export default function Log() {

    const [listalog, setListalog] = useState([]);

    async function log() {
        await fetch("http://sc3004996.glitch.me/log", {
            method: "POST",
        }).then(async response => {
            setListalog(await response.json())
            console.log(listalog)
        })
    }

    return (
        <div className='lista mx-5 m-5 p-5'>
            <h3 onClick={log}>LOG</h3>
            <ul>
                {listalog.map((distancia, indice) => {
                    console.log(distancia)
                    return (
                        <li>Alarme ativado as: {distancia}</li>
                    )
                })}
            </ul>
        </div>
    );
}