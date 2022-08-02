import { Link } from "react-router-dom";
import circumference from '../assets/images/circumference.png';
import sun from '../assets/icons/sun.png'
import { useState, useEffect } from "react";
import getRequestedData from "../service/service";
import arrow from '../assets/icons/right-arrow.png';

function Sun() {
    const [circum, setCircum] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [fade, setFade] = useState(null);
    const sunRadius = 695700;

    const getFetch = async () => {
        const url = "/api_pi";
        const res = await getRequestedData(url);
        const c = 2 * res * sunRadius;
        const circumference = c.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' km';

        setIsPending(false);
        setCircum(circumference);
    }

    useEffect(() => {
        document.title = 'Sun Circumference';
        setTimeout(() => {
            getFetch();
        }, 2000);
        setFade('fade-in');
    }, []);
    return (
        <div className={`parent-container_sun ${fade}`}>
            <header className='title-container_sun'>
                <span>To calculate the circumference of the sun, this client app needs to use the formula below</span>
            </header>
            <div className="body-container_sun">
                <div className="assets-container_sun">
                    <img src={circumference} className='cir_img' alt="Circumference formula" />
                    <img src={sun} className='sun_icon App-logo' alt="sun icon" />
                </div>
                <br />
                <div>
                    <span>
                        Since the radius of the sun is <strong>{sunRadius.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} km </strong>
                    </span>
                    <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/sunfact.html">[1]</a>
                </div>
                <br />
                <span>
                    <strong>Therefore, the circumference of the sun is</strong>
                </span>
                <br />
                <br />
                <span className="circum-value">{isPending ? 'Calculating...' : circum}</span>
            </div>
            <footer>
                <div>
                    <img src={arrow} className='arrow_icon' alt="arrow icon" />
                    <Link to="/" className="link">
                        <span>Back to homepage</span>
                    </Link>
                </div>
                <div>
                    <img src={arrow} className='arrow_icon' alt="arrow icon" />
                    <Link to="/pi" className="link">
                        <span>The value of Pi</span>
                    </Link>
                </div>
            </footer>
        </div>
    );
}

export default Sun;