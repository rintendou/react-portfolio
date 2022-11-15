import { Link } from "react-router-dom";
import './home.scss';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text">
                <h1>
                    Hi, <br /> I'm Danny
                </h1>
                <h2> 
                    Undergraduate Student at the <a href='https://www.nyit.edu/'><em>New York Institute of Technology</em>.</a>
                </h2>
                <Link to='/contact' className="button"> CONTACT ME </Link>
            </div>
        </div>
    );
}

export default Home;