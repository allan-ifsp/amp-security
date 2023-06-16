import React, {useState} from 'react';
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn
} from 'mdb-react-ui-kit';
import './login.css';
import swal from 'sweetalert';

export function Login() {
    // if (localStorage.getItem("login") != null) {
    //     window.location.href = "/paginalogado"
    // }

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    var aux;

    const logar = async (event) => {
        event.preventDefault();
        const headersList = {
            "Accept": "/",
            "Content-Type": "application/x-www-form-urlencoded"
        }
        let bodyContent = "login=" + inputs.login + "&senha=" + inputs.senha;
        let response = await fetch('http://localhost:9853/usuario/login', {
            method: "POST",
            headers: headersList,
            body: bodyContent,
        }).then(async response => {
            const respStatus = await response.status;
            if(respStatus == 200) {
                aux = await response.json();
                console.log(aux);
                localStorage.setItem("login", aux.login)
                window.location.href = "/paginalogado"
            }
            if(respStatus == 401){
                swal("Senha incorreta", " ", "error")
            } else
            if(respStatus == 404){
                swal("Usuario não encontrado", " ", "error")
            }
        })
    }
    
    return (
        <div>
            {/*<form action="http://sc3004996.glitch.me/quero?" method="post">*/}
            <form onSubmit={logar}>
                <h1 className='text-center p-3'>Acesso</h1>
                <MDBInput className='mb-4' type='text' onChange={handleChange} name='login' id='form1Example1' label='CPF' />
                <MDBInput className='mb-4' type='password' onChange={handleChange} name='senha' id='form1Example2' label='Senha' />

                {/*<MDBRow className='mb-4'>*/}
                {/*    <MDBCol className='d-flex justify-content-center'>*/}
                {/*        <MDBCheckbox id='form1Example3' label='Lembrar'/>*/}
                {/*    </MDBCol>*/}
                {/*    <MDBCol>*/}
                {/*        <a href='src/components/deslogado/login#!'>Esqueci a senha</a>*/}
                {/*    </MDBCol>*/}
                {/*</MDBRow>*/}

                <MDBBtn type='submit' block>
                    Acessar
                </MDBBtn>
            </form>
        </div>
    );
}
