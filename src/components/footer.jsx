import React from 'react';
import './styles/home.css';
import './styles/profile.css';
import './styles/footer.css';
import { DiGithubBadge } from 'react-icons/di';
import { AiOutlineHome} from 'react-icons/ai';
import { AiOutlineTeam} from 'react-icons/ai';
import {useHistory} from 'react-router-dom';
const Footer = props =>{
    const history = useHistory();
    function handlenOnclick(route) {
        return history.push(route)
        
    }
    return(
    <div className='container-pofile'>
        {props.children}
        <footer>
            <div className='navigation-sec' onClick={()=> handlenOnclick('/profile')} >
                
                <div className='navigation-img'>
                    <AiOutlineHome size={25} color='#A5A5A5'></AiOutlineHome>
                    <h4>Inicio</h4>
                </div>
            </div>
            <div className='navigation-sec' onClick={()=> handlenOnclick('/repos')}>
                <a href='#/repos'>
                <div className='navigation-img'>
                    <DiGithubBadge size={25} color="#A5A5A5"></DiGithubBadge>
                    <h4>Repositorios</h4>
                </div>
                </a>
            </div>
            <div className='navigation-sec' onClick={()=> handlenOnclick('/followers')}>
                <a href='#/followers'>
                <div className='navigation-img'>
                    <AiOutlineTeam size={25} color="#A5A5A5"></AiOutlineTeam>
                    <h4>seguidores</h4>
                </div>
                </a>
            </div>
            <div className='navigation-sec' onClick={()=> handlenOnclick('/following')}>
                <a href='#/following'>
                <div className='navigation-img'>
                    <AiOutlineTeam size={25} color="#A5A5A5"></AiOutlineTeam>
                    <h4>Seguindo</h4>
                </div>
                </a>
            </div>
            
        </footer>
    </div>)
    }

export default Footer