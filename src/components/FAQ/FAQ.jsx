import React, {useRef, useEffect} from 'react';
import './faq.scss';
import FaqItem from "./FAQ-item";

const Faq = () => {

    const FAQList = [
        {
            No: '01',
            title: 'Who is Mr.SNARK for?',
            body: ' Mr.SNARK is geared for all users who are looking for slightly deeper and curated data while gaining access to a like-minded community to discuss key trends,topics, analytics, and ideas across the cryptocurrency market.',
        },
        {
            No: '02',
            title: 'Whats makes Mr.SNARK different?',
            body: 'Mr.SNARK offers institutional level depth with our data, delivering high-value components and analytics to a broad set of investors. Our platform also allows users to engage directly with others to share value-add ideas. We attempt to provide our service at a rate that reflects the democratization of bespoke data.',
        },
        {
            No: '03',
            title: 'Where Does your data come from?',
            body: 'Our database reflects a matrix of our internal proprietary research as well as those of our esteemed industry partners including, but not limited to, Token Terminal, Coinmetrics, The Tie and many more.',
        },
        {
            No: '04',
            title: "What's included in my membership?",
            body: 'Membership includes all services currently provided, as well as additional add-on functions in the coming months, that we are excited to announce. We maintain an open approach to data and roadmap, tailoring both to emerging trends and customers wants.',
        },
        {
            No: '05',
            title: 'How can I share my membership?',
            body: 'No, the membership cannot be shared, as there is a limit of one user per account.',
        },
        {
            No: '06',
            title: 'How can I cancel my membership?',
            body: 'MCancel anytime through your My Account page. Members that cancel during a subscription period (either Monthly or Annual), will continue to have full access to their account until the end of the respective billing cycle. Mr. SNARK will not issue a refund.',
        },
    ];

    return (
        <section id="FAQ" className="FAQ">
            <div className="container">
                <div className="FAQ-title" data-aos="fade-up" data-aos-delay="150">
                    <h6>FAQ</h6>
                    <h2>Find information people ask about the most</h2>
                </div>

                <ul className="FAQ-list" data-aos="fade-up">

                    {FAQList.map((item, index) =>
                        <FaqItem key={item.No} item={item}/>
                    )}
                </ul>
            </div>
        </section>
    );
};

export default Faq;