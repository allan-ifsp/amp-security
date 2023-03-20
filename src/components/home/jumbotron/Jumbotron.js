import React, { useState } from 'react';

export function Jumbotron() {

  return (
    <header>
      <div className='p-5 text-center bg-light'>
        <h1 className='mb-3'>AMP Security</h1>
        <h4 className='mb-3 p-5 text-center bg-light' >Somos uma empresa de segurança patrimonial que oferece soluções para
            proteção de propriedades de nossos clientes. A empresa utiliza tecnologias avançadas,
            incluindo sensores de proximidade e alarmes, para garantir a segurança do ambiente.

            Os sensores de proximidade da AMP Security são capazes de detectar qualquer movimento
            ou presença dentro de um perímetro pré-determinado, acionando imediatamente um alarme
            sonoro e visual que alerta a equipe de segurança. Essa tecnologia permite que a empresa
            ofereça um serviço de segurança 24 horas por dia, 7 dias por semana, garantindo a
            proteção constante da propriedade do cliente.

            A AMP Security tem como objetivo oferecer tranquilidade e segurança para seus clientes,
            oferecendo serviços de alta qualidade e confiabilidade. Além disso, a empresa conta
            com uma equipe de profissionais altamente treinados e capacitados, que estão sempre prontos
            para agir em caso de qualquer emergência ou situação de risco.

            Com seus serviços de segurança patrimonial e tecnologia avançada, a AMP Security é a escolha
            ideal para empresas e indivíduos que buscam proteção e tranquilidade em relação à segurança
            de seus patrimônios.
        </h4>
        <a className='btn btn-dark' href='' role='button'>
          Contato
        </a>
      </div>
    </header>
  );
}