import Header from "../Header";

import "./Slider2.css";

const Slider2 = () => {
  return (
        <div
        className='slider2'
        style={{ minHeight: `${window.innerHeight}px` }}
    >
        <div
            className='overlay'
            style={{ minHeight: `${window.innerHeight}px` }}
        >

                <Header/>
               
                
                
           <div className='contentCon'>
                    <ul className='slogan title'>
                        <li style={{ color: "#ffbc00" }}>contactez nous</li>   
                        </ul>
                        
                </div>
               
                 </div>
                
                 </div> 
             
                
            
    );
};

export default Slider2;
