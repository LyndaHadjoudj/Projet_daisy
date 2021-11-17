import { useState } from "react";

import "./Value.css";

const Value = ({ place, value, description }) => {
    const [transform, setTransform] = useState(false);
    return (
        <div
            className={transform ? "value rise" : "value"}
            onMouseEnter={() => setTransform(true)}
            onMouseLeave={() => setTransform(false)}
        >
            <div className='number-holder'>
                <span>#{place}</span>
            </div>
            <h4 className='title'>{value}</h4>

            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
            </p>
        </div>
    );
};

export default Value;
