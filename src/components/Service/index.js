import "./Service.css";

const Service = ({ img, title, description }) => {
    return (
        <div className='service'>
            <div className='img-holder'>
                <img
                    src={require(`../../images/${img}.svg`).default}
                    alt='Service'
                />
            </div>
            <h4>{title}</h4>
            <div className='separation'>
                <div className='line'></div>
                <div className='circle'></div>
                <div className='line'></div>
            </div>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
            </p>
        </div>
    );
};

export default Service;
