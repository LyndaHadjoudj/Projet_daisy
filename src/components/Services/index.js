import Service from "../Service";

import "./Services.css";

const Services = () => {
    return (
        <div
            className='services'
            style={{ minHeight: `${window.innerHeight}px` }}
        >
            <div className='container'>
                <h2 className='title'>Agence e-commerce,design et marketing</h2>
                <div className='services-container'>
                    <Service img='service01' title='Social Media Manager' />
                    <Service img='service02' title='Creation des designs' />
                    <Service img='service03' title='Creation des sites web' />
                    <Service img='service04' title='Conseil & Stratégie' />
                </div>
            </div>
        </div>
    );
};

export default Services;
