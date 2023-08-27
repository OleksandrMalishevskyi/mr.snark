import React from 'react';
import './download.scss';
import phones from '../../img/download-phones.png';

const Download = () => {
    return (
        <section className="download-area">
            <div className="container">
                <div className="download-img" data-aos="fade-up">
                    <img src={phones} alt="phones"/>
                </div>
                <div className="download-content">
                    <h2 data-aos="fade-up">Download now</h2>
                    <p data-aos="fade-up" data-aos-delay="150">Keep all the important insights in your pocket while you’re on the go. Get latest news and chat with investors who have similar interests!</p>

                    <div className="download-app" data-aos="fade-up" data-aos-delay="300">
                        <a href="https://apps.apple.com/us/app/mr-snark/id1620373335" target="_blank" className="download-item apple"></a>
                        <a href="https://play.google.com/store/apps/details?id=com.mrsnark" target="_blank" className="download-item google"></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Download;