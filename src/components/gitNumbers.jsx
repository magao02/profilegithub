import React from 'react';
import './styles/home.css';
import './styles/profile.css';
import {useHistory} from 'react-router-dom';

const GitNumbers = props =>{
    const history = useHistory();
    function handlenOnclick(route) {
        return history.push(route)   
    }
    return(
<div>
        <section className='container-numbers'>
            <div className='number-container'onClick={()=> handlenOnclick('/repos')}>
                <h1>{props.repos}</h1>
                <h2>Repos</h2>
            </div>
            <div className='number-container'onClick={()=> handlenOnclick('/followers')}>
                <h1>{props.seguidores}</h1>
                <h2>Seguidores</h2>
            </div>
            <div className='number-container'onClick={()=> handlenOnclick('/following')}>
                <h1>{props.seguindo}</h1>
                <h2>Seguindo</h2>
            </div>
        </section>
        </div>)
}
export default GitNumbers