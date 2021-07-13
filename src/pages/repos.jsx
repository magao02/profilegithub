import '../components/styles/repos.css';
import Footer from '../components/footer'
import Header from '../components/Header';
import Repos from '../components/repos';
import React ,{useContext} from 'react';
import { context } from '../context/context';
const Repositorios = props =>{
const ctx = useContext(context);
    return(
    <div className='container-repos'>
       <Header number={ctx.userData?.public_repos} secao=' repositorios'></Header>
       <Repos repos={ctx.userRepos}></Repos>
       <Footer></Footer>
    </div>)
}
export default Repositorios