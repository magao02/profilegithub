
import '../components/styles/repos.css';
import '../components/styles/follow.css'
import Footer from '../components/footer'
import React ,{useContext} from 'react';
import { context } from '../context/context';
import Header from '../components/Header';
import Follow from '../components/follow';
const Followers = props =>{
const ctx = useContext(context);
    return(
    <div className='container-followers'>
        
        <Header number= {ctx.userData?.followers} secao=" seguidores"></Header>
        <Follow followers={ctx.userFollowers}></Follow>
        <Footer></Footer>
    </div>)
}
export default Followers