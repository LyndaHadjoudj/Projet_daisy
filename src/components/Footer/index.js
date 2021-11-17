import "./Footer.css";

import logoImg from "../../images/logo2.png";
import fb from "../../images/facebook.png";
import gm from "../../images/instagram.png";
import tw from "../../images/twitter.png";
import ln from "../../images/linkedin.png";

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='desc'>
                    <img src={logoImg} alt='Logo' />

                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Sed aperiam alias ullam unde sequi, incidunt animi
                        porro pariatur repellat inventore similique blanditiis
                        eligendi quisquam ipsam impedit, numquam illum, nihil
                        harum.
                    </p>
                </div>
                <div className='holder'>
                    <div className='links'>
                        <h4>Liens</h4>
                        <ul>
                            <li>Acceuil</li>
                            <li>A propos</li>
                            <li>Portfolio</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className='social'>
                        <h4>Rejoignez nous sur nos réseaux</h4>
                        <div className='holder'>
                            <div className='newsletter'>
                                <form>
                                    <input
                                        type='email'
                                        placeholder='Inserer votre e-mail'
                                    />
                                    <button>Envoyer</button>
                                </form>
                            </div>
                            <ul>
                                <li>
                                    <a
                                        href='https://www.facebook.com/agencedaisy'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <img src={fb} alt='Facebook' />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='https://www.instagram.com/agencedaisy/'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <img src={gm} alt='Facebook' />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='https://twitter.com/agency_daisy'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <img src={tw} alt='Facebook' />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='https://www.linkedin.com/company/daisy-agency/'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <img src={ln} alt='Facebook' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='copyright'>
                Copyright Daisy Agency <span> &copy; </span>2021
            </div>
        </footer>
    );
};

export default Footer;
