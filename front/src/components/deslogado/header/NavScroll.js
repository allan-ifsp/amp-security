import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBBtn,
} from 'mdb-react-ui-kit';
import './navscroll.css'
import {Login} from "../login/Login";
import {Home} from "../home/Home";
import {Formcontato} from "../home/formcontato/Formcontato";

export function NavScroll() {
    const [showBasic, setShowBasic] = useState();
    const [showContent, setShowContent] = useState(<Home />);

    return (
        <div>
{/*         //expand='lg' light bgColor='light' */}
        <MDBNavbar className='meunavbar' fixed='top' expand='sm' light>
            <MDBContainer fluid>
                <div>
                    <MDBNavbarBrand onClick={() => setShowContent(<Home />)}><img
                        src='/imagens/fera.png'
                        height='50'
                        alt=''
                        loading='lazy'
                    />
                    </MDBNavbarBrand>
                </div>

                <div>
                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <MDBNavbarLink onClick={() => setShowContent(<Home />)} className='text-black' active aria-current='page' href='#empresa'>
                                Empresa
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink onClick={() => setShowContent(<Home />)} className='text-black' href='#servicos'>Serviços</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink onClick={() => setShowContent(<Home />)} className='text-black pe-5' href='#contato' >Contato</MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                               <MDBBtn rounded className='acesso mx-2' color='dark' onClick={() => setShowContent(<Login />)}> Acessar
                               </MDBBtn>
                         </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
                </div>
            </MDBContainer>
        </MDBNavbar>
        {showContent}
        </div>
    );
}