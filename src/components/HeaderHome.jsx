import React from 'react';
import {BsArrowBarRight} from 'react-icons/bs';
import {useHistory} from 'react-router-dom';
const Header = props =>{
    const history = useHistory();
    function handlenOnclick(route) {
        return history.push(route)
        
    }
    return(
        <div className='header1'>
            <h6>{props.name}</h6>
            <div className='arrow-sair' onClick={()=>handlenOnclick('/')}>
                
            <BsArrowBarRight size={20} color='#D03434'></BsArrowBarRight>
            </div>
        </div>)
}
export default Header