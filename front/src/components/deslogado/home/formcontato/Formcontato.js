import React from 'react';
import {
    MDBInput,
    MDBBtn
} from 'mdb-react-ui-kit';
import './formcontato.css'

export function Formcontato() {
    return (
        <div className="mx-auto meuformcontato" id='contato'>
            <h1 className='text-center mt-5' >Contato</h1>
            <form className='justify-content-center mt-4'>
                <div className= 'text-center '>
                    <MDBInput id='form4Example1' wrapperClass='mb-4' label='Nome'/>
                    <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email'/>
                    <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' label='Telefone'/>
                    <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Mensagem'/>
                    <MDBBtn type='submit' className='btn btn-dark' block>
                        Enviar
                    </MDBBtn>
                </div>
            </form>
        </div>
    );
}