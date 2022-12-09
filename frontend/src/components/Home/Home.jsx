import "./Home.css";
import TimeLeft from "../TimeLeft/TimeLeft";
import { About } from './components/sections/About';
import { Collab } from '../sections/Collab';
import { Speakers } from '../sections/Speakers';
import { Sponsors } from '../sections/Sponsors';

const Home = () => {

    return (
        <div className="container">
            <div className="main-title-container">
                <h1 className="main-title text-white p-8">
                    WHERE YOUR <span className="text-red">KING</span> IS ALWAYS UNDER THE <span className="text-red">CHECK</span>
                </h1>
                <img
                    alt="chess board"
                    className="chess-board"
                />
            </div>
            <div className="time-left-container">
                <TimeLeft buttonText={'register'} margin={'mt-0'} linkTo={'register'}></TimeLeft>
            </div>
            <About/>
            <Collab/>
            <Speakers/>
            <Sponsors/>
        </div>
    );
};

export default Home;
