import React from 'react';
import './features.scss';
import dev_1 from '../../img/features items/01.png';
import dev_2 from '../../img/features items/02.png';
import dev_3 from '../../img/features items/03.png';
import dev_4 from '../../img/features items/04.png';
import dev_5 from '../../img/features items/05.png';
import dev_6 from '../../img/features items/06.png';
import dev_7 from '../../img/features items/07.png';
import dev_8 from '../../img/features items/08.png';
import dev_9 from '../../img/features items/09.png';
import dev_10 from '../../img/features items/10.png';

const Features = () => {
    return (
        <section id="Features" className="features">
            <div className="container">
                <div className="features-title">
                    <h6 data-aos="fade-up">FEATURES</h6>
                    <h2 data-aos="fade-up" data-aos-delay="150">Try 7 days for free, then $8.99/mo <br/>
                        <span>($89.99 annual)</span>
                    </h2>
                </div>

                <ul className="feature-list" data-aos="fade-up" data-aos-delay="150">
                    <li className="feature-list-item">
                        <div className="item-title">
                            <span>01</span>
                            On-Chain Data.
                        </div>
                        <div className="feature-device">
                            <img src={dev_1} alt="phone"/>
                        </div>
                    </li>
                    <li className="feature-list-item">
                        <div className="item-title">
                            <span>02</span>
                            Developer Data.
                        </div>
                        <div className="feature-device">
                            <img src={dev_2} alt="phone"/>
                        </div>
                    </li>
                    <li className="feature-list-item">
                        <div className="item-title">
                            <span>03</span>
                            Relative ROI and Benchmarks.
                        </div>
                        <div className="feature-device">
                            <img src={dev_3} alt="phone"/>
                        </div>
                    </li>
                    <li className="feature-list-item">
                        <div className="item-title">
                            <span>04</span>
                            In-Depth Market Data.
                        </div>
                        <div className="feature-device">
                            <img src={dev_4} alt="phone"/>
                        </div>
                    </li>
                    <li className="feature-list-item">
                        <div className="item-title">
                            <span>05</span>
                            Sector and Sub-Sector Rankings.
                        </div>
                        <div className="feature-device">
                            <img src={dev_5} alt="phone"/>
                        </div>
                    </li>
                    <li className="feature-list-item">
                        <div className="item-title">
                            <span>06</span>
                            Social Trends.
                        </div>
                        <div className="feature-device">
                            <img src={dev_6} alt="phone"/>
                        </div>
                    </li>
                    <li className="feature-list-item">
                        <div className="item-title">
                            <span>07</span>
                            General Market Data.
                        </div>
                        <div className="feature-device">
                            <img src={dev_7} alt="phone"/>
                        </div>
                    </li>
                    <li className="feature-list-item">
                        <div className="item-title">
                            <span>08</span>
                            Real-Time News.
                        </div>
                        <div className="feature-device">
                            <img src={dev_8} alt="phone"/>
                        </div>
                    </li>
                    <li className="feature-list-item">
                        <div className="item-title">
                            <span>09</span>
                            Tokenomics.
                        </div>
                        <div className="feature-device">
                            <img src={dev_9} alt="phone"/>
                        </div>
                    </li>
                    <li className="feature-list-item">
                        <div className="item-title">
                            <span>10</span>
                            Valuation Metrics based on Network Fees/Revenue.
                        </div>
                        <div className="feature-device">
                            <img src={dev_10} alt="phone"/>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Features;