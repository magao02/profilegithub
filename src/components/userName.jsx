import React from 'react';
const UserName = props =>
    <div className='container-details'>
        {props.children}
            <div className='detail-name'>
                <div className='detail'></div>
                <h1>{props.name}</h1>
            </div>
                <p>{props.description1}<br></br>{props.description2}</p>
        </div>
    
export default UserName