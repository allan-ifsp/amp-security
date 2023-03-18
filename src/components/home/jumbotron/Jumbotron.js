import React, { useState } from 'react';

export function Jumbotron() {

  return (
    <header>
      <div className='p-5 text-center bg-light'>
        <h1 className='mb-3'>Lorem ipsum</h1>
        <h4 className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus interdum odio, ut sodales turpis mattis a. Vestibulum blandit magna in lorem suscipit, vel consequat enim pulvinar. Mauris semper sagittis purus, eget volutpat mauris bibendum eget. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas a enim eget sapien efficitur euismod non non elit. Integer maximus augue eget ex congue, in ullamcorper lorem accumsan. Nullam a nisl vel nulla hendrerit pellentesque. Sed dictum finibus nisl eu ultricies. Suspendisse malesuada libero ac velit bibendum hendrerit. Fusce eget metus lorem.</h4>
        <a className='btn btn-primary' href='' role='button'>
          Cadastro
        </a>
      </div>
    </header>
  );
}