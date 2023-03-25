import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
/*import './meucarousel.css';*/
import './carousel.css';

export function Carousel() {
  return (
    <MDBCarousel showIndicators showControls dealy={1500} fade>

      <MDBCarouselItem
        className='w-100 d-block meucarousel'
        itemId={1}
        src='/imagens/carousel1.jpeg'
        alt='...'
      >
        <h5>Segurança</h5>
        <p>Sua casa protegida.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block meucarousel'
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
  );
}