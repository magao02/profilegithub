
import './styles/home.css';
import './styles/profile.css';
import './styles/repos.css';
import React  from 'react';

import {AiOutlineStar} from 'react-icons/ai';
const Repos = props =>
       <section className='repos'>
           {(props?.repos).map(repo => (
               <div className='repo-unico'>
               <div className='detail-name'>
                <div className='detail'></div>
                <h2>{repo?.name}</h2>
                </div>
                <p>{repo?.description}</p>
                <div className='footer'>
                <AiOutlineStar size={20} color='#FFCE00'></AiOutlineStar>
                <p>{repo?.forks}</p>
                </div>
           </div>
           ))}
           
           
           
       </section>
      
 
export default Repos