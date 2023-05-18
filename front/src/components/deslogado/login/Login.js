import React, {useState} from 'react';
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn
} from 'mdb-react-ui-kit';
import './login.css'

export function Login() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(inputs);
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/x-www-form-urlencoded"
        }
        let bodyContent = "login=" + inputs.login + "&senha=" + inputs.senha;
        let response = await fetch('http://localhost:9853/usuario/login', {
            method: "POST",
            headers: headersList,
            body: bodyContent,
        }).then(response => {
            console.log(response);
            return response.json();
        }).catch(() => console.log('falha ao cadastrar'))

        let data = await response.text();
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1 className='text-center p-3'>Acesso</h1>
            <MDBInput className='mb-4'
                      type='text'
                      name='login'
                      label='Login'
                      value={inputs.login || ""}
                      onChange={handleChange}
            />
            <MDBInput className='mb-4'
                      type='password'
                      name='senha'
                      label='Senha'
                      value={inputs.senha || ""}
                      onChange={handleChange}
            />

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
