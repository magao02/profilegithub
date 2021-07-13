import React, {useContext, useState} from 'react';
import '../components/styles/home.css';
import { DiGithubBadge } from 'react-icons/di';
import client from '../services/client'
import { context } from '../context/context';
import {useHistory} from 'react-router-dom';
const Home = props =>{
    const ctx = useContext(context)
    const [searchedValue, setSearchedValue] = useState('');
    async function getUserData(route){
        try {
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
    const history = useHistory();
    function handlenOnclick(route) {
        return history.push(route)
        
    }
    return(
    <div className='container'>
        <header className="header-home">
            <div className="header-image">
            <DiGithubBadge size={200} color="#FFCE00"></DiGithubBadge>
            </div>
            <form action="">
                <div className='input-container'>
                <input type="text" name="login" required value={searchedValue} onChange={e=> setSearchedValue(e.target.value)}></input>
                </div>
                <button onClick={getUserData} type="submit" >INICIAR</button>
            </form>
        </header>	
    </div>
    )}
export default Home