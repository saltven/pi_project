import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import arrow from '../assets/icons/right-arrow.png';

function Home() {
    const [fade, setFade] = useState(null);

    useEffect(() => {
        document.title = 'Home';
        setFade('fade-in');
    },[]);

    return (
        <div className={`parent-container_home ${fade}`}>
            <header className='title-container_home'>
                <span className='welcome-title'><strong>Welcome</strong> to Naluri's coding challenge</span>
                <br />
                <span className='byMe-title'>By <strong>Ammar Hazrin</strong></span>
            </header>
            <div className="body-container_home">
                <span>The solution:</span>
                <div className="list-container">
                    <ol>
                        <li>Create a HTTP server that is capable of</li>
                        <ul>
                            <li>Calculating Pi to increasing accuracy</li>
                            <li>Storing the most accurate value of Pi each time the server has calculated the next decimal precision</li>
                            <li>Being queried via HTTP GET request</li>
                        </ul>
                        <br />
                        <li>Create a webapp that displays</li>
                        <ul>
                            <li>The server's current known value of Pi</li>
                            <li>The circumference of the sun</li>
                        </ul>
                    </ol>
                </div>
            </div>
            <footer>
                <div>
                    <img src={arrow} className='arrow_icon' alt="arrow icon" />
                    <Link to="/pi" className="link">
                        <span>The value of Pi</span>
                    </Link>
                </div>
                <div>
                    <img src={arrow} className='arrow_icon' alt="arrow icon" />
                    <Link to="/sun" className="link">
                        <span>The circumference of the sun</span>
                    </Link>
                </div>
            </footer>
        </div>
    );
}

export default Home;