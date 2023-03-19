import React from 'react';
import {
    MDBInput,
    MDBBtn
} from 'mdb-react-ui-kit';

export function Formcontato() {
    return (
        <div className="mx-auto" style={{width: "700px"}}>
            <form className='justify-content-center'>
                <div className='p-5 text-center '>
                    <MDBInput id='form4Example1' wrapperClass='mb-4' label='Nome'/>
                    <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email'/>
                    <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' label='Telefone'/>
                    <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Mensagem'/>
                    <MDBBtn type='submit' className='mb-4' block>
                        Enviar
                    </MDBBtn>
                </div>
            </form>
        </div>

    );
}