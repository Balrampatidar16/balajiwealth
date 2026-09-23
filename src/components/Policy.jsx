import { useEffect } from 'react';
import './Policy.css';

const Policy = () => {
    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="policy" id="policy">
            <div className="container">
                <div className="section-header text-center">
                    <h1 className="animate-fadeInUp">Policies & Disclaimer</h1>
                    <p className="section-subtitle animate-fadeInUp">
                        Please read our policies carefully before using our services
                    </p>
                </div>

                <div className="policy-content">
                    {/* Refund Policy Section */}
                    <div className="policy-section card">
                        <div className="policy-icon">💳</div>
                        <h2>Refund Policy</h2>
                        <div className="policy-text">
                            <p>
                                We value our customers and are committed to offering the best services to our clients. However, our clients want to realize that we do not provide a 100% guarantee on our calls and therefore cannot provide any refund on subscriptions.
                            </p>
                            <p>
                                As soon as a service has been subscribed to and payment has been made for the same, it could not be canceled or refunded anyhow. If for some unexpected reasons, the customer is not satisfied with our services, they can call us to seek direction on future calls. We will deliver our best effort to increase the satisfaction levels in such cases.
                            </p>
                            <p>
                                However, any request by the customer to cancel a service or get money back will not be accepted in any case, as we have clearly communicated the risk of loss of capital in addition to gain to all our clients before subscribing to any of our services.
                            </p>

                            <div className="policy-highlight">
                                <h3>Before Making Payment, Please:</h3>
                                <ul>
                                    <li>Read all information about our services and support given to our clients</li>
                                    <li>Read our Terms and Conditions</li>
                                    <li>Read our Privacy Policy</li>
                                    <li>Understand that there is no refund possible in any case whatsoever</li>
                                </ul>
                            </div>

                            <p className="policy-note">
                                <strong>Important:</strong> Kindly make the payment after analyzing all Terms and Conditions, disclaimers, and refund policy.
                            </p>
                        </div>
                    </div>

                    {/* Disclaimer Section */}
                    <div className="policy-section card">
                        <div className="policy-icon">⚠️</div>
                        <h2>Disclaimer</h2>
                        <div className="policy-text">
                            <ol className="disclaimer-list">
                                <li>
                                    All information published on the site including contents, strategies, updates with other tools and features provided on the site are for information and knowledge purposes to empower the clients to pursue better monetary choices.
                                </li>
                                <li>
                                    The information published on the site is applicable for a specific time frame and is based totally on statistics, analysis, estimates and reviews.
                                </li>
                                <li>
                                    The information assessment and ideas given might be based upon information and data obtained from daily updates and strategies, and we trust the data to be valid.
                                </li>
                                <li>
                                    Inspire Institute of Trading Technologies reserves the right to make amendments or alterations as required from time to time. Inspire Institute of Trading Technologies works in giving autonomous and straightforward data to its clients. Inspire Institute of Trading Technologies is providing automated trade execution strategies primarily based on technical guidelines and regulations.
                                </li>
                                <li>
                                    Inspire Institute of Trading Technologies does not give any assurance or guarantee of performance.
                                </li>
                                <li>
                                    The payment gateway will be liable for affecting the installments. We do not deal directly with handling money of the users.
                                </li>
                                <li>
                                    All format, design, ideas and other intellectual properties continue to be the assets and belong to Inspire Institute of Trading Technologies and may not be used for any cause whatsoever by any party without written permission.
                                </li>
                                <li>
                                    Dealings done by Inspire Institute of Trading Technologies are carried out in accordance with its internal rules and procedures with all implemented regulations.
                                </li>
                                <li>
                                    This is a confidential site possessed by Inspire Institute of Trading Technologies. Any unauthorized scanning, use or exploitation of the same is precisely prohibited.
                                </li>
                                <li>
                                    All subscription fees paid to Inspire Institute of Trading Technologies are non-refundable.
                                </li>
                                <li>
                                    Value of investments can vary depending on factors and forces affecting the securities market.
                                </li>
                                <li>
                                    Inspire Institute of Trading Technologies, its directors, and its personnel shall not be in any manner liable for any loss/damage which could arise to any individual from any errors in the information contained on the website.
                                </li>
                            </ol>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="policy-footer card">
                        <h3>Questions About Our Policies?</h3>
                        <p>If you have any questions or concerns regarding our policies, please feel free to contact us.</p>
                        <div className="policy-contact">
                            <div>📧 Balajiwealthmanage001@gmail.com</div>
                            <div>📱 +91 88170 97378</div>
                            <div>📍 Office No. 202, Napier Tower, Russel Chowk, Jabalpur, MP – 482001</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Policy;
