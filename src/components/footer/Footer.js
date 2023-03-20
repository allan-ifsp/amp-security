import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4 text-center'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        <section className='mb-5'>
          <h3 style={{'color':'blueviolet'}}>
            Regiões Atendidas
          </h3>
        </section>

        <section className='mt-4'>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>São Paulo</h5>
              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Rua Icaraí, 222
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Tatuapé, São Paulo – SP
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    CEP: 03051-050
                  </a>
                </li>
                <li>
                  <MDBIcon fab icon="whatsapp" className='pe-1' />
                  <a href='#!' className='text-white'>
                    11 3543-0100
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Araras</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Rua Angelo Bertolini
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Jardim Europa, Araras - SP
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    CEP: 13604-400
                  </a>
                </li>
                <li>
                  <MDBIcon fab icon="whatsapp" className='pe-1' />
                  <a href='#!' className='text-white'>
                    19 1234-5678
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>São Carlos</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Rua Padre Bonilha, 111
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Jd. Bandeirantes, São Carlos - SP
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    CEP: 13562-240
                  </a>
                </li>
                <li>
                  <MDBIcon fab icon="whatsapp" className='pe-1' />
                  <a href='#!' className='text-white'>
                    16 99876-6969
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Piracicaba</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Rua Tiradentes, 123
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Bairro XV, Piracicaba - SP
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    CEP: 15045-666
                  </a>
                </li>
                <li>
                  <MDBIcon fab icon="whatsapp" className='pe-1' />
                  <a href='#!' className='text-white'>
                    19 2525-1819
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>


      <section className='mb-4 mt-5'>
        <h3 style={{'color':'blueviolet'}}>
          SITEMAP
        </h3>
      </section>

        <section className='mt-4'>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h6 className='text-uppercase'>HOME</h6>
              <h6 className='text-uppercase'>Empresa</h6>
              <h6 className='text-uppercase'>Serviços</h6>
              <h6 className='text-uppercase'>Contato</h6>
              <h6 className='text-uppercase'>Acesso</h6>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h6>REGIÕES</h6>
              <h6>RH</h6>
              <h6>CONTATO</h6>
              <h6>NOTÍCIAS</h6>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <img src='/imagens/logo.png' className='w-100' />
            </MDBCol>
          </MDBRow>
        </section>

    </MDBContainer>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Desenvolvedores:
        <p>
         Allan Specian Carvalheira | Marcelo Gonçalves Maia | Paulo Ricardo Mascaro
        </p>
      </div>
    </MDBFooter>
  );
}