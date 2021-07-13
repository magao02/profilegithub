import React from 'react';
import './styles/home.css';
import './styles/profile.css';


const GitDetails = props =>
    <div>
    {props.children}
    <section className='container-details'>
            <h1>BIO</h1>
            <p>{props.bio}</p>
        </section>
    </div>
export default GitDetails