import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {queries} from "@testing-library/react";

export function NavLogado(){

    return(
    <SideNav style={{backgroundColor:'#221e1e'}}
        onSelect={(selected) => {
            // Add your code here
        }}
    >
        <SideNav.Toggle/>
        <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
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
                    <NavText>
                       cam 1
                    </NavText>
                </NavItem>
                <NavItem eventKey="charts/barchart">
                    <NavText>
                        cam 2
                    </NavText>
                </NavItem>
            </NavItem>
            <NavItem eventKey="home">
                <NavIcon>
                    <i className="fa fa-fw fa-feed" style={{fontSize: '1.75em'}}/>
                </NavIcon>
                <NavText>
                    PIR's
                </NavText>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
    )
}