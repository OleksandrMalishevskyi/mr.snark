import React, {useState} from 'react';
import './footer.scss';
import { useForm } from "react-hook-form";
import ErrorText from "../UI/errorText/ErrorText";

const Footer = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [sendMessage, setSendMessage] = useState(false)
    const onSubmit = data => {
        setSendMessage(true)
        reset();
    }

    return (
        <footer>
            <div className="container">
                <div className="footer-box">
                    <div className="footer-content">
                        <a className="logo" href="#" onClick={() => {window.scroll(0,0)}} data-aos="fade-up">
                            Mr.SNARK
                        </a>
                        <p data-aos="fade-up" data-aos-delay="300">Analyze, get insights and latest news<br/>
                            about crypto & web3 industry</p>

                        <div className="footer-links" data-aos="fade-up" data-aos-delay="300">
                            <ul className="footer-socials-links">
                                <li className="footer-socials"><a href="https://www.instagram.com/" target="_blank">Instagram</a></li>
                                <li className="footer-socials"><a href="https://discord.com/" target="_blank">Discord</a></li>
                                <li className="footer-socials"><a href="https://twitter.com" target="_blank">Twitter</a></li>
                                <li className="footer-socials"><a href="https://www.google.com/intl/ru/gmail/about/" target="_blank">Email</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-contact">
                        <h3 data-aos="fade-up" data-aos-delay="300">Contact Us</h3>
                        <p data-aos="fade-up" data-aos-delay="600">Ask any questions regarding our app and we will get back to your <br/>
                            as soon as possbile.</p>

                        <form onSubmit={handleSubmit(onSubmit)} className="contact-forms">

                            <label data-aos="fade-up" data-aos-delay="300">
                                <input className="input" placeholder="First Name" {...register('firstName', {
                                    required: {
                                        value: true,
                                        message: "The field is required."
                                    },
                                })} />
                                <div>{errors?.firstName && <ErrorText text={errors.firstName.message}/>}</div>
                            </label>

                            <label data-aos="fade-up" data-aos-delay="450">
                                <input className="input" placeholder="Last Name" {...register('lastName', {
                                    required: {
                                        value: true,
                                        message: "The field is required."
                                    },
                                })} />
                                <div>{errors?.lastName && <ErrorText text={errors.lastName.message}/>}</div>
                            </label>

                            <label data-aos="fade-up" data-aos-delay="600">
                                <input className="input" placeholder="YourEmail@gmail.com" {...register('email', {
                                    required: {
                                        value: true,
                                        message: "The field is required."
                                    },
                                    pattern: {
                                        value: /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i,
                                        message: "Invalid E-mail."
                                    }
                                })} />
                                <div>{errors?.email && <ErrorText text={errors.email.message}/>}</div>
                            </label>

                            <label data-aos="fade-up" data-aos-delay="750">
                                <input className="input" placeholder="Phone Number" {...register('phone', {
                                    required: {
                                        value: true,
                                        message: "The field is required."
                                    },
                                    pattern: {
                                        value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
                                        message: "Invalid number."
                                    }
                                })} />
                                <div>{errors?.phone && <ErrorText text={errors.phone.message}/>}</div>
                            </label>

                            <label className="input-message" data-aos="fade-up" data-aos-delay="900">
                                <input className="input input-message" placeholder="Write a message" {...register('message', {
                                    required: {
                                        value: true,
                                        message: "The field is required."
                                    },
                                    minLength: {
                                        value: 10,
                                        message: "Min 10 characters"
                                    }
                                })} />
                                <div>{errors?.message && <ErrorText text={errors.message.message}/>}</div>
                            </label>

                            <button  type="submit" value="send message" data-aos="fade-up" data-aos-delay="1150"> send message </button>


                        </form>

                        {/*information*/}
                        {sendMessage && <div style={{color: 'red', paddingTop: '7px'}} data-aos="fade-up">
                            ! This site is a demonstration demo version, so no message will be sent as intended.
                            I advise you to go to the real service directly to the customer. Thank you for your understanding.
                        </div>}

                    </div>
                </div>
                <h5 data-aos="fade-up" data-aos-delay="500">© 2022 Mr.SNARK All rights reserved.</h5>
            </div>
        </footer>
    );
};

export default Footer;