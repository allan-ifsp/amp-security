import React from 'react';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';

export function Formcontato() {
  return (
    <form className='d-flex justify-content-center'>
      {/* <fieldset className='w-50'> */}
      <div className='p-5 text-center '>
      <MDBInput id='form4Example1' wrapperClass='mb-4' label='Nome' />
      <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email' />
      <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' label='Phone' />
      <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Mensagem' />

      {/* <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        id='form4Example4'
        label='Send me a copy of this message'
        defaultChecked
      /> */}

      <MDBBtn type='submit' className='mb-4' block>
        Entrar
      </MDBBtn>
      </div>
      {/* </fieldset> */}
    </form>
  
  );
}