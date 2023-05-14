import React from 'react';
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn
} from 'mdb-react-ui-kit';
import './login.css'

export function Login() {
    return (
        <form>
            <h1 className='text-center p-3'>Acesso</h1>
            <MDBInput className='mb-4' type='email' id='form1Example1' label='CPF' />
            <MDBInput className='mb-4' type='password' id='form1Example2' label='Senha' />

            <MDBRow className='mb-4'>
                <MDBCol className='d-flex justify-content-center'>
                    <MDBCheckbox id='form1Example3' label='Lembrar'/>
                </MDBCol>
                <MDBCol>
                    <a href='src/components/deslogado/login#!'>Esqueci a senha</a>
                </MDBCol>
            </MDBRow>

            <MDBBtn type='submit' block>
                Acessar
            </MDBBtn>
        </form>
    );
}