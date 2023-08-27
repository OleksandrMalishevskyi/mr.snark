import React, {useState} from 'react';
import './header.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({

});

const Header = () => {

    const [isActiveHamburger, setIsActiveHamburger] = useState(false);
    const onClickLogo = () => {
        window.scroll(0,0);
        setIsActiveHamburger(false);
    }

    return (
        <header>
            <div className="container">
                <div className="navbar">
                    <a className="logo" href="#" onClick={onClickLogo} data-aos="fade-right" data-aos-delay="150">
                        Mr.SNARK
                    </a>
                    <ul className="menu" data-aos="fade-down">
                        <li><a href="#DemoVideo">Demo Video</a></li>
                        <li><a href="#Partners">Partners</a></li>
                        <li><a href="#Features">Features</a></li>
                        <li><a href="#Testimonials">Testimonials</a></li>
                        <li><a href="#FAQ">FAQ</a></li>
                    </ul>
                    <button className="join" data-aos="fade-left" data-aos-delay="150">join now</button>


                    <div className={isActiveHamburger ? "menu-xs active" : "menu-xs"}>
                        <a onClick={() => {setIsActiveHamburger(!isActiveHamburger)}} href="#DemoVideo">Demo Video</a>
                        <a onClick={() => {setIsActiveHamburger(!isActiveHamburger)}} href="#Partners">Partners</a>
                        <a onClick={() => {setIsActiveHamburger(!isActiveHamburger)}} href="#Features">Features</a>
                        <a onClick={() => {setIsActiveHamburger(!isActiveHamburger)}} href="#Testimonials">Testimonials</a>
                        <a onClick={() => {setIsActiveHamburger(!isActiveHamburger)}} href="#FAQ">FAQ</a>
                    </div>
                    <button onClick={() => setIsActiveHamburger(!isActiveHamburger)} className={isActiveHamburger ? "join-xs active" : "join-xs"}>join now</button>


                    <button onClick={() => setIsActiveHamburger(!isActiveHamburger)} className={isActiveHamburger ? "hamburger active" : "hamburger"} data-aos="fade-left" data-aos-delay="350">
                        <span className="bar bar-top"></span>
                        <span className="bar bar-mid"></span>
                        <span className="bar bar-bottom"></span>
                    </button>

                    {isActiveHamburger && <div className="bg-dark"></div>}
                </div>
            </div>
        </header>
    );
};

export default Header;