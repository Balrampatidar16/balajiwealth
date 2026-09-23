import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="footer-logo">
                            <img src="/logo.png" alt="Shree Balaji Wealth Management" className="logo-image" />
                            <span className="logo-text">Shree Balaji Wealth Management</span>
                        </div>
                        <p className="footer-description">
                            Professional stock market advisory firm providing expert wealth management, trading guidance, and investment strategies with discipline, research &amp; profit.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#benefits">Benefits</a></li>
                            <li><a href="#how-it-works">How It Works</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Legal</h4>
                        <ul>
                            <li><Link to="/policy">Refund Policy &amp; Disclaimer</Link></li>
                            <li><Link to="/policy">Terms &amp; Conditions</Link></li>
                            <li><Link to="/policy">Privacy Policy</Link></li>
                            <li><Link to="/policy">SEBI Compliance</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Contact</h4>
                        <ul>
                            <li>📧 Balajiwealthmanage001@gmail.com</li>
                            <li>📱 +91 88170 97378</li>
                            <li>📍 Office No. 202, Napier Tower, Russel Chowk, Jabalpur, MP – 482001</li>
                            <li>⏰ Mon-Fri: 9:00 AM - 6:00 PM IST</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Shree Balaji Wealth Management. All rights reserved.</p>
                    <p className="disclaimer">
                        <strong>Disclaimer:</strong> Trading in financial markets involves risk. Past performance is not indicative of future results.
                        Please consult with a financial advisor before making investment decisions.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
