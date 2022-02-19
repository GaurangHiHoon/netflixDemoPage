import "./home.scss";
import Navbar from "./navbar";
import Featured from './featured';
import List from './list';

const Home = () => {
    return (
    <div className='home'>
        <Navbar/>
        
        <Featured/>
        <List title="Continue to Watch"/>
        <List title="New on Netflix"/>
        <List title="Based on your previous videos"/>
        </div>);
}
 
export default Home;