import React from 'react';
import './demoVideo.scss';
import video from '../../img/demovideomain.mp4';

const DemoVideo = () => {
    return (
        <section id="DemoVideo" className="container">
            <div className="demoVideo">
                <div className="demoVideo_title" data-aos="fade-up">
                    <h6>demo video</h6>
                    <h2>Explore the Mr.SNARK app in real-time</h2>
                </div>

                <div className="demoVideo-content">

                    <div className="demoVideo-box" data-aos="fade-up" data-aos-delay="150">
                        <video width="100%" height="100%" controls>
                            <source src={video} type="video/mp4"/>
                        </video>
                    </div>
                    <div className="demoVideo-text">
                        <h3 className="text-title" data-aos="fade-up" data-aos-delay="300">
                            On-Chain Analytics. Fundamental <br/> Screening. Signals. Intelligent News. <br/> Collaboration.
                        </h3>
                        <div className="demo-text-box">
                            <div className="text-item" data-aos="fade-up">
                                <span>Analyze</span>
                                <p>Compare on-chain metrics and broader cycle data, with select field customization.</p>
                            </div>
                            <div className="text-item" data-aos="fade-up" data-aos-delay="150">
                                <span>Screen</span>
                                <p>Access key network data including revenues, fees and TVL</p>
                            </div>
                            <div className="text-item" data-aos="fade-up" data-aos-delay="300">
                                <span>Visualize</span>
                                <p>Understand sector, sub-sector and ecosystems at a deeper level.</p>
                            </div>
                            <div className="text-item" data-aos="fade-up" data-aos-delay="450">
                                <span>Chat</span>
                                <p>Coordinate directly with like-minded Web3 investors via real-time messaging.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemoVideo;