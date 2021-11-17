import Header from "../Header";

import "./Slider.css";

const Slider = () => {
    return (
        <div
            className='slider'
            style={{ minHeight: `${window.innerHeight}px` }}
        >
            <div
                className='overlay'
                style={{ minHeight: `${window.innerHeight}px` }}
            >
                <Header />
                <div className='content'>
                    <ul className='slogan title'>
                        <li style={{ color: "#ffbc00" }}>Believe.</li>
                        <li>Improve.</li>
                        <li style={{ color: "#ffbc00" }}>Enjoy.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Slider;
