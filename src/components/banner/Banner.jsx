import React, {useState} from 'react';
import './banner.scss';
import phone_1 from '../../img/phone_1.png';
import phone_2 from '../../img/phone_2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 800,
});

const Banner = ({isActiveVideo, setIsActiveVideo}) => {

    return (
        <div className="banner-space">
            <section className="banner">
                <div className="container">
                    <div className="banner-content">
                        <h6 data-aos="fade-up" data-aos-delay="150">7 DAYS FREE TRIAL, $8.99/MO ($89.99 annual)</h6>
                        <h1 data-aos="fade-up" data-aos-delay="500">Democratizing <br/> Crypto Data</h1>
                        <p data-aos="fade-up" data-aos-delay="800">Mr. SNARK is your resident unicorn butler,
                            providing the most tailored Web3 journey
                            from analytics to protocol screening,
                            on-chain metrics and visualization.
                        </p>
                        <div className="download-app" data-aos="fade-up" data-aos-delay="1000">
                            <a href="https://apps.apple.com/us/app/mr-snark/id1620373335" target="_blank" className="download-item apple"></a>
                            <a href="https://play.google.com/store/apps/details?id=com.mrsnark" target="_blank" className="download-item google"></a>
                        </div>

                        <button onClick={() => {setIsActiveVideo(true)}} className="banner-video-btn" data-aos="fade-up" data-aos-delay="1200">
                            <div className="video-img"></div>
                            <span className="video-text">watch the video</span>
                        </button>

                        <div className={isActiveVideo ? "video-link active" : "video-link"}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/rr1kl6n4Ljs"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>

                            <button className="video-close" onClick={() => {setIsActiveVideo(false)}}></button>
                        </div>

                        {isActiveVideo && <div onClick={() => {setIsActiveVideo(false)}} className="bg-dark"></div>}

                    </div>

                    <div className="banner-img">
                        <img className="phone_1" src={phone_1} alt="phone" data-aos="fade-up-right" data-aos-delay="800"/>
                        <img className="phone_2" src={phone_2} alt="phone" data-aos="fade-down-left" data-aos-delay="1200"/>
                    </div>
                </div>
            </section>
        </div>


    );
};

export default Banner;