import React from 'react';
import './testimonials.scss';

import slide1 from '../../img/test_1.png';
import slide2 from '../../img/test_2.png';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {

    return (
        <section id="Testimonials" className="testimonials-area">
            <div className="container">
                <h6 data-aos="fade-up">TESTIMONIALS</h6>

                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{
                        type: "fraction",
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    data-aos="fade-up" data-aos-delay="150"
                >
                    <SwiperSlide><img src={slide1} alt="testimonials"/></SwiperSlide>
                    <SwiperSlide><img src={slide2} alt="testimonials"/></SwiperSlide>
                </Swiper>

                <div className="testimonials-text" data-aos="fade-up" data-aos-delay="300">
                    <span>Paola Origel</span>
                    <p>General Partner @ Chainlink Capital <br/>
                        #1 Performing Crypto Fund Of Funds For 2021</p>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;