
import '../components/styles/repos.css';
import '../components/styles/follow.css'
import Footer from '../components/footer'
import React ,{useContext} from 'react';
import { context } from '../context/context';
import Header from '../components/Header';
import Follow from '../components/follow';
const Following = props =>{
    const ctx = useContext(context);
    return(
    <div className='container-followers'>
        <Header number= {ctx.userData?.following} secao=" seguindo"></Header>
        <Follow followers={ctx.userFollowing}></Follow>
        <Footer></Footer>
    </div>)
}
export default Following