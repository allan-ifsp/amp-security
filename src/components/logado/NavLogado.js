import React, { useState } from 'react';
import '../header/navscroll.css'
// import {Home} from "../home/Home";
import './navlogado.css'
//import '../header/logado.css'

export function NavLogado() {
    const [showBasic, setShowBasic] = useState();
    const [showContent, setShowContent] = useState();

    return (
        <div className='navlogado'>
            <nav>
                <ul className='menu'>
                    <li>
                        <a onClick={() => setShowContent()}>Home</a>
                    </li>
                </ul>
                <ul>
                    <li>Cameras</li>
                    <li><a>cam1</a></li>
                    <li><a>cam2</a></li>
                    <li><a>cam3</a></li>
                </ul>
                <ul>
                    <li>PIR's</li>
                    <li><a>pir1</a></li>
                    <li><a>pir2</a></li>
                    <li><a>pir3</a></li>
                </ul>
                <ul>
                    <li>Alarmes</li>
                    <li><a>alarme1</a></li>
                    <li><a>al2</a></li>
                    <li><a>al3</a></li>
                </ul>
            </nav>
            {showContent}
        </div>
    );
}