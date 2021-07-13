import React ,{useContext} from 'react';
import '../components/styles/profile.css';
import GitNumbers from '../components/gitNumbers';
import GitDetails from '../components/gitDetails';
import Footer from '../components/footer';
import UserName from '../components/userName';
import UserImage from '../components/userImage';
import { context } from '../context/context';
import Header from '../components/HeaderHome';
const Profile = props =>{
    const ctx = useContext(context);
    return(
    <div className='container-profile'>
        <Header name={ctx.userData?.login}></Header> 
        <UserImage image={ctx.userData?.avatar_url} ></UserImage>
        <UserName name={ctx.userData?.name} description1={ctx.userData?.company} description2={ctx.userData?.location}></UserName>
        <GitNumbers repos={ctx.userData?.public_repos} seguindo= {ctx.userData?.following}seguidores={ctx.userData?.followers}></GitNumbers>
        <GitDetails bio={ctx.userData?.bio}></GitDetails>
        <Footer></Footer>
    </div>)
}
export default Profile