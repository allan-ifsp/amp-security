import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {queries} from "@testing-library/react";
import {Link, NavLink, redirect} from "react-router-dom";
import React, {useState} from "react";
import {Home} from "../deslogado/home/Home";
import {Camera} from "./Camera";
import Sensor from "./Sensor";
import Log from "./Log";

export function NavLogado(){

    const [showContent, setShowContent] = useState(<Camera />);

    function deslogar(){
        localStorage.removeItem("login");
        window.location.href = "/";
    }

    // function log(){
    //     fetch("http://sc3004996.glitch.me/log", {
    //         method: "POST",
    //     }).then(async response => {
    //         console.log(await response.json())
    //         var listalog = await response.json()
    //         setShowContent(<Log />)
    //     })
    // }

    return(
        <div>
    <SideNav style={{backgroundColor:'#221e1e'}}
        onSelect={(selected) => {
            console.log(selected)
            if (selected == "ativar") {
                fetch("http://sc3004996.glitch.me/ativar", {
                    method: "POST",
                });
            }
            if (selected == "desativar") {
                // console.log("pre fetch")
                fetch("http://sc3004996.glitch.me/desativar", {
                    method: "POST",
                });
            }
            if (selected == "log") {
                setShowContent(<Log />)
            }
        }}
    >
        <SideNav.Toggle/>
        <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home" onClick={() => window.location.href="/" }>
                <NavIcon>
                    <i className="fa fa-fw fa-home" style={{fontSize: '1.75em'}}/>
                </NavIcon>
                <NavText>
                    Home
                </NavText>
                </NavItem>
            <NavItem eventKey="charts">
                <NavIcon>
                    <i className="fa fa-fw fa-video-camera" style={{fontSize: '1.75em'}}/>
                </NavIcon>
                <NavText>
                    Cameras
                </NavText>
                <NavItem eventKey="charts/linechart">
                    <NavText onClick={() => setShowContent(<Sensor />)}>
                       cam 1
                    </NavText>
                </NavItem>
                <NavItem eventKey="charts/barchart">
                    <NavText>
                        cam 2
                    </NavText>
                </NavItem>
            </NavItem>
            <NavItem eventKey="sensores">
                <NavIcon>
                    <i className="fa fa-fw fa-feed" style={{fontSize: '1.75em'}}/>
                </NavIcon>
                <NavText>
                    Sensores
                </NavText>
                <NavItem eventKey="ativar">
                    <NavText>
                        Ativar
                    </NavText>
                </NavItem>
                <NavItem eventKey="desativar">
                    <NavText>
                        Desativar
                    </NavText>
                </NavItem>
            </NavItem>
            {/*onClick={() => setShowContent(<Log />)}*/}
            <NavItem eventKey="log" >
                <NavIcon>
                    <i className="fas fa-arrow-right-from-bracket" style={{fontSize: '1.75em'}}/>
                </NavIcon>
                <NavText>
                    Mostrar Log
                </NavText>
            </NavItem>
            <NavItem eventKey="sensores" onClick={deslogar}>
                <NavIcon>
                    <i className="fas fa-arrow-right-from-bracket" style={{fontSize: '1.75em'}}/>
                </NavIcon>
                <NavText>
                    Deslogar
                </NavText>
            </NavItem>
        </SideNav.Nav>

    </SideNav>
    {showContent}
        </div>
    )
}