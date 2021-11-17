import { useRef, useState } from "react";

import "./Header.css";
import { Link} from "react-router-dom";
import logoImage from "../../images/logo3.png";
import menuImg from "../../images/menu.png";

const Header = () => {
    const [position, setPosition] = useState({ bottom: 0, left: 0, width: 0 });

    const divRef = useRef();
    const placeUnderline = (li) => {
        setPosition({
            bottom:
                li.getBoundingClientRect().top +
                li.getBoundingClientRect().height +
                5,
            left: li.getBoundingClientRect().left,
            width: li.getBoundingClientRect().width,
        });
        /* divRef.current.offsetTop = offsetTop; */
    };

    const removeUnderline = () => {
        setPosition({ width: 0 });
    };

    const menuRef = useRef();

    return (
        <div className='header'>
            <div className='container'>
                <div className='logo'>
                    <img src={logoImage} alt='Agency Logo' />
                </div>
                <div className='links'>
                    <div className='menu'>
                        <img
                            src={menuImg}
                            alt='Menu'
                            onClick={(e) => {
                                if (
                                    menuRef.current.classList.contains("open")
                                ) {
                                    menuRef.current.classList.remove("open");
                                    e.target.style.setProperty(
                                        "transform",
                                        `translateX(${
                                            window.innerWidth * 0.001
                                        }px)`
                                    );
                                } else {
                                    menuRef.current.classList.add("open");
                                    e.target.style.setProperty(
                                        "transform",
                                        `translateX(-${
                                            window.innerWidth * 0.4
                                        }px)`
                                    );
                                }
                            }}
                        />
                        <div className='menu-bar' ref={menuRef}>
                            <ul>
                                <li>
                               < Link className='navlink' to="/" >
                                   Acceuil
                        
                                   </Link>
                                </li>
                                <li>A propos</li>
                                <li>Portfolio</li>
                                <li>Partenaire</li>
                                <li><Link className='navlink' to="Contact" >
                                  Contact
                        
                                   </Link></li>
                            </ul>
                        
                        </div>
                    </div>
                    <ul>
                    <li 
                            onMouseEnter={(e) => {
                                placeUnderline(e.target);
                            }}
                            onMouseLeave={() => {
                                removeUnderline();
                            }}  
                        >
                             <Link className='navlink' to="/" >
                                   Accueil
                        
                                   </Link>
                          </li>
                        <li
                            onMouseEnter={(e) => {
                                placeUnderline(e.target);
                            }}
                            onMouseLeave={() => {
                                removeUnderline();
                            }}
                        >
                            <Link className='navlink' to="/" >
                                   A propos
                        
                                   </Link>
                        </li>
                        <li
                            onMouseEnter={(e) => {
                                placeUnderline(e.target);
                            }}
                            onMouseLeave={() => {
                                removeUnderline();
                            }}
                        >
                            <Link className='navlink' to="/" >
                                    Portfolio
                                   </Link>
                           
                        </li>
                        <li
                            onMouseEnter={(e) => {
                                placeUnderline(e.target);
                            }}
                            onMouseLeave={() => {
                                removeUnderline();
                            }}
                        >
                              <Link className='navlink' to="/" >
                                    Partenaire
                                   </Link>
                        </li>
                        <li
                            onMouseEnter={(e) => {
                                placeUnderline(e.target);
                            }}
                            onMouseLeave={() => {
                                removeUnderline();
                            }}
                        >
                                   <Link className='navlink'  to="/Contact" >
                                   Contact
                        
                                 </Link>  
                           
                        </li>
                    </ul>
                    <div
                        className='underline'
                        ref={divRef}
                        style={{
                            top: `${position.bottom}px`,
                            left: `${position.left}px`,
                            width: `${position.width}px`,
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Header;
