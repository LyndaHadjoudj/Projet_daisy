import Value from "../Value";
import "./Values.css";

const Values = () => {
    return (
        <div
            className='values'
            style={{ minHeight: `${window.innerHeight}px` }}
        >
            <div
                className='container'
                style={{ minHeight: `${window.innerHeight}px` }}
            >
                <h2 className='title'>
                    Pourquoi choisir <span>Daisy</span> ?
                </h2>
                <div className='values-box'>
                    <Value place={1} value='Confiance' />
                    <Value place={2} value='Responsabilité' />
                    <Value place={3} value='Implication' />
                </div>
            </div>
        </div>
    );
};

export default Values;
