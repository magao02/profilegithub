import React , {useContext, useState}from 'react';
import './styles/repos.css';
import './styles/follow.css'
import { context } from '../context/context';
import client from '../services/client'
import {useHistory} from 'react-router-dom';
const Follow = props =>{
    
    const history = useHistory();
    const ctx = useContext(context)
    const [searchedValue, setSearchedValue] = useState('');
    async function getUserData(login){
        try {
            setSearchedValue(login)
            const response = await  client.get(`/${searchedValue}`);
            const repos = await client.get(`/${searchedValue}/repos`);
            const followers = await client.get(`/${searchedValue}/followers`);
            const following = await client.get(`/${searchedValue}/following`);
            ctx.setUserData(response.data);
            ctx.setUserRepos(repos.data)
            ctx.setUserFollowers(followers.data);
            ctx.setUserFollowing(following.data);
            
            handlenOnclick('/profile')
        } catch (error) {
            console.log(error)
        }
    }
    
    function handlenOnclick(route) {

        return history.push(route)
    }
       return(<section className='followers' >
           {(props.followers).map(follow =>(
              
                   <button className='button' onClick={()=>getUserData(follow.login)} type="submit"><div className='follow-unico' >
               <div className='detail'></div>
                    <div className='container-image-follow'>
                        <img src={follow.avatar_url} alt='ss'></img>
                    </div>
                   <div className='detail-name'>
                    <h2>{follow.login}</h2>
                    </div>
               </div>
               </button >
           ))}
           
       </section>)
}
export default Follow