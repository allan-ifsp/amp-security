import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {queries} from "@testing-library/react";
import {NavLink, redirect} from "react-router-dom";
import React, {useState} from "react";
import {Home} from "../deslogado/home/Home";
import {Camera} from "./Camera";
import Sensor from "./Sensor";

export function NavLogado(){

    const [showContent, setShowContent] = useState(<Camera />);

    return(
        <div>
    <SideNav style={{backgroundColor:'#221e1e'}}
        onSelect={(selected) => {
            if (selected == "pir") {
                // console.log("pre fetch")
                fetch("http://sc3004996.glitch.me/quero?", {
                    method: "POST",
                });
                // console.log("pos fetch")
            }
        }}
    >
        <SideNav.Toggle/>
        <SideNav.Nav defaultSelected="home">
            <NavLink  to="/" exact>
                <NavItem eventKey="home">
                <NavIcon>
                    <i className="fa fa-fw fa-home" style={{fontSize: '1.75em'}}/>
                </NavIcon>
                <NavText>
                    Home
                </NavText>
                </NavItem>
            </NavLink>
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
            <NavItem eventKey="pir">
                <NavIcon>
                    <i className="fa fa-fw fa-feed" style={{fontSize: '1.75em'}}/>
                </NavIcon>
                <NavText>
                    PIR's
                </NavText>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
    {showContent}
        </div>
    )
}