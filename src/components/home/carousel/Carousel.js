import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import './meucarousel.css'

export function Carousel() {
  return (
    // <div className='meucarousel'>
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='/imagens/carousel1.jpeg'
        alt='...'
      >
        <h5>Segurança</h5>
        <p>Sua casa protegida.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='/imagens/carousel2.jpeg'
        alt='...'
      >
        <h5>Conforto</h5>
        <p>Acesse remotamente através de qualquer dispositivo móvel.</p>
      </MDBCarouselItem>

      {/*<MDBCarouselItem*/}
      {/*  className='w-100 d-block'*/}
      {/*  itemId={3}*/}
      {/*  src='/imagens/meio-termo.jpeg'*/}
      {/*  alt='...'*/}
      {/*>*/}
      {/*  <h5>Third slide label</h5>*/}
      {/*  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>*/}
      {/*</MDBCarouselItem>*/}
    </MDBCarousel>
    // </div>
  );
}