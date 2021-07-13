import React from 'react';
import {AiOutlineArrowLeft} from 'react-icons/ai';
const Header = props =>
        <header>
            
           <a href='#/profile'><AiOutlineArrowLeft className='arrow-left' size={30} color='#fff'></AiOutlineArrowLeft></a>
           <h1>{props.number}{props.secao}</h1>
       </header>

export default Header