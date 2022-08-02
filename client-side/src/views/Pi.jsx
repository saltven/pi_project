import { Link } from "react-router-dom";
import formula from '../assets/images/leibnizpi.svg';
import { useState, useEffect } from "react";
import getRequestedData from "../service/service";
import arrow from '../assets/icons/right-arrow.png';

function Pi() {
    const [pi, setPi] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [fade, setFade] = useState(null);

    const getFetch = async () => {
        const url = "/api_pi";
        let res = await getRequestedData(url);
        setIsPending(false);
        setPi(res);
        console.log('Results',res)
    }

    useEffect(() => {
        document.title = 'PI Value';
        setTimeout(() => {
            getFetch();
        }, 2000);
        setFade('fade-in');
    }, []);
    return (
        <div className={`parent-container_pi ${fade}`}>
            <header className='title-container_pi'>
                <span>To get the value of π, the HTTP server calculated accurately using the Leibniz formula for π (1 million iterations)</span>
            </header>
            <div className="body-container_pi">
                <img src={formula} className='formula_img' alt="Leibniz formula for pi" />
                <br />
                <span>
                    <strong>
                        The server's current known value of π is
                    </strong>
                </span>
                <br />
                <br />
                <span className="pi-value">{isPending ? 'Calculating...' : pi}</span>
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
                    <Link to="/sun" className="link">
                        <span>The circumference of the sun</span>
                    </Link>
                </div>
            </footer>
        </div>
    );
}

export default Pi;