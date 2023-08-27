import React from 'react';
import './partners.scss';
import client_1 from '../../img/client_1.png';
import client_2 from '../../img/client_2.png';
import client_3 from '../../img/client_3.png';

const Partners = () => {
    return (
        <section id="Partners" className="partners-area">
            <div className="container">
                <div className="partners-box">
                    <h6 data-aos="fade-up">OUR PARTNERS</h6>
                    <h2 data-aos="fade-up" data-aos-delay="150">Powered by premium data partners used by leading crypto institutional funds</h2>

                    <div className="partner-clients" data-aos="fade-up" data-aos-delay="300">
                        <div className="partner-clients-item">
                            <img src={client_1} alt="client"/>
                        </div>
                        <div className="partner-clients-item">
                            <img src={client_2} alt="client"/>
                        </div>
                        <div className="partner-clients-item">
                            <img src={client_3} alt="client"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;