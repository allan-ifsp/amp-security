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

export function NavScroll() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        //expand='lg' light bgColor='light'
        <MDBNavbar className='meunavbar' fixed expand='sm' light>
            <MDBContainer fluid>
                <div>
                    <MDBNavbarBrand href='/'><img
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
                            <MDBNavbarLink  className='text-black' active aria-current='page' href='#'>
                                Empresa
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink  className='text-black' href='#'>Serviços</MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink  className='text-black pe-5' href='#'>Contato</MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                              <MDBBtn rounded className='acesso mx-2' color='dark' href='#'> ACESSO
                              </MDBBtn>
                            {/*<MDBNavbarLink className='text-black pe-5 fw-bold' href='#'>ACESSO</MDBNavbarLink>*/}
                        </MDBNavbarItem>

                    </MDBNavbarNav>
                    {/*<Nav.Link href="#a" className='fw-bolder justify-content-center'>ACESSO</Nav.Link>*/}
                </MDBCollapse>
                </div>
            </MDBContainer>
        </MDBNavbar>
    );
}