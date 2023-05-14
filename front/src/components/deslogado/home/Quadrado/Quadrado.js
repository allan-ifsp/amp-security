import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';
import './quadrado.css'

export function Quadrado() {
  return (
      <div id='servicos'>
      <div className='quadrado'></div>
      <div className='text-center bg-dark pb-5 '>

    <MDBRow className='row-cols-1 row-cols-sm-2 g-3 justify-content-center'>
      <MDBCol>
        <h1 className='text-light'>Serviços</h1>
      </MDBCol>
    </MDBRow>
    <MDBRow className='row-cols-1 row-cols-sm-2 g-3 justify-content-center'>
      <MDBCol sm="2">
        <MDBCard>
          <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
            <MDBCardImage src='/imagens/celular-grade.jpeg' fluid alt='...' />
            <a>
              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>Acesso Remoto</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </MDBCardText>
            {/*<MDBBtn href='#' className='btn btn-dark'>Button</MDBBtn>*/}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol sm="2">
        <MDBCard>
          <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
            <MDBCardImage src='/imagens/login-multiplataforma.jpeg' fluid alt='...' />
            <a>
              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>Multiplataforma</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </MDBCardText>
            {/*<MDBBtn href='#' className='btn btn-dark'>Button</MDBBtn>*/}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol sm="2">
        <MDBCard>
          <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
            <MDBCardImage src='/imagens/c1.jpeg' fluid alt='...' />
            <a>
              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>Vigilancia</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </MDBCardText>
            {/*<MDBBtn href='#' className='btn btn-dark'>Button</MDBBtn>*/}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
      </div>
      </div>
  );
}