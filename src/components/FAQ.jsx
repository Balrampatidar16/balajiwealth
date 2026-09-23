import { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: 'How does the account handling service work?',
            answer: 'We assign you a dedicated account manager who executes trades based on recommendations from SEBI-registered research analysts. You maintain full control of your Demat account while we handle the trading operations.'
        },
        {
            question: 'What is the profit-sharing model?',
            answer: 'Our flexible profit-sharing model ensures you only pay when your portfolio generates net profits. This performance-based approach aligns our success with yours, ensuring we are motivated to maximize your returns.'
        },
        {
            question: 'Is this service SEBI compliant?',
            answer: 'Yes, absolutely. All our trades are executed based on public recommendations from SEBI-registered research analysts, ensuring complete regulatory compliance and transparency.'
        },
        {
            question: 'Do I maintain control of my Demat account?',
            answer: 'Yes, you retain complete control of your Demat account. You can add or withdraw funds at any time, and you have full visibility of all transactions.'
        },
        {
            question: 'What markets do you trade in?',
            answer: 'We specialize in intraday trading focusing on major indices including Nifty, Bank Nifty, and Sensex options. Our strategies are tailored to capitalize on intraday market movements.'
        },
        {
            question: 'What is the minimum investment required?',
            answer: 'The minimum investment varies based on the trading plan you choose. Contact our team to discuss options that align with your capital and risk preferences.'
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq" id="faq">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="animate-fadeInUp">Frequently Asked Questions</h2>
                    <p className="section-subtitle animate-fadeInUp">
                        Get answers to common questions about our account handling services
                    </p>
                </div>

                <div className="faq-container">
                    {faqs.map((faq, index) => (
                        <div key={index} className={`faq-item card ${activeIndex === index ? 'active' : ''}`}>
                            <button className="faq-question" onClick={() => toggleFAQ(index)}>
                                <span>{faq.question}</span>
                                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
                            </button>
                            <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
