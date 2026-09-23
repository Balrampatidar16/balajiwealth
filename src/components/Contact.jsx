import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatusMessage({ type: '', text: '' });

        try {
            // EmailJS configuration
            // Replace these with your actual EmailJS credentials
            const serviceId = 'YOUR_SERVICE_ID';
            const templateId = 'YOUR_TEMPLATE_ID';
            const publicKey = 'YOUR_PUBLIC_KEY';

            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                phone: formData.phone,
                message: formData.message,
                to_email: 'Balajiwealthmanage001@gmail.com'
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);

            setStatusMessage({
                type: 'success',
                text: 'Thank you for your interest! Our team will contact you shortly.'
            });
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatusMessage({
                type: 'error',
                text: 'Sorry, there was an error sending your message. Please try again or contact us directly.'
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="animate-fadeInUp">Get Started Today</h2>
                    <p className="section-subtitle animate-fadeInUp">
                        Ready to maximize your trading profits? Contact us now
                    </p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="info-card card">
                            <div className="info-icon">📧</div>
                            <h3>Email Us</h3>
                            <p>Balajiwealthmanage001@gmail.com</p>
                        </div>

                        <div className="info-card card">
                            <div className="info-icon">📱</div>
                            <h3>Call Us</h3>
                            <p>+91 88170 97378</p>
                        </div>

                        <div className="info-card card">
                            <div className="info-icon">📍</div>
                            <h3>Office Address</h3>
                            <p>Office No. 202, Napier Tower,<br />Russel Chowk, Jabalpur,<br />MP – 482001</p>
                        </div>

                        <div className="info-card card">
                            <div className="info-icon">⏰</div>
                            <h3>Business Hours</h3>
                            <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                        </div>
                    </div>

                    <form className="contact-form card" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="Enter your phone"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                placeholder="Tell us about your trading goals"
                            ></textarea>
                        </div>

                        {statusMessage.text && (
                            <div className={`status-message ${statusMessage.type}`}>
                                {statusMessage.text}
                            </div>
                        )}

                        <button type="submit" className="btn btn-primary btn-full" disabled={isLoading}>
                            {isLoading ? 'Sending...' : 'Send Message'}
                            {!isLoading && <span>→</span>}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
