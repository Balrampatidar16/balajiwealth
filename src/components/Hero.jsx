import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const increment1 = 5000 / steps;
        const increment2 = 98 / steps;
        const increment3 = 10 / steps;

        let currentStep = 0;
        const timer = setInterval(() => {
            currentStep++;
            setCount1(Math.min(Math.floor(increment1 * currentStep), 5000));
            setCount2(Math.min(Math.floor(increment2 * currentStep), 98));
            setCount3(Math.min(Math.floor(increment3 * currentStep), 10));

            if (currentStep >= steps) clearInterval(timer);
        }, duration / steps);

        return () => clearInterval(timer);
    }, []);

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToHowItWorks = () => {
        document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero" id="home">
            <div className="hero-background">
                <div className="particle particle-1"></div>
                <div className="particle particle-2"></div>
                <div className="particle particle-3"></div>
                <div className="particle particle-4"></div>
            </div>

            <div className="container">
                <div className="hero-content">
                    <div className="hero-badge animate-fadeInUp">
                        <span className="badge-icon">🏆</span>
                        <span>SEBI Compliant Stock Market Advisory</span>
                    </div>

                    <h1 className="hero-title animate-fadeInUp">
                        Grow Your Wealth with Expert Market Advisory
                    </h1>

                    <p className="hero-subtitle animate-fadeInUp">
                        Shree Balaji Wealth Management — your trusted partner for stock market advisory,
                        intraday trading, portfolio management, and consistent wealth creation.
                        Discipline. Research. Profit.
                    </p>

                    <div className="hero-cta animate-fadeInUp">
                        <button className="btn btn-primary" onClick={scrollToContact}>
                            Start Investing Now
                            <span>→</span>
                        </button>
                        <button className="btn btn-outline" onClick={scrollToHowItWorks}>
                            How It Works
                        </button>
                    </div>

                    <div className="hero-pillars animate-fadeInUp">
                        <div className="pillar-item">
                            <span className="pillar-icon">🎯</span>
                            <span>Discipline</span>
                        </div>
                        <div className="pillar-divider">|</div>
                        <div className="pillar-item">
                            <span className="pillar-icon">🔍</span>
                            <span>Research</span>
                        </div>
                        <div className="pillar-divider">|</div>
                        <div className="pillar-item">
                            <span className="pillar-icon">📈</span>
                            <span>Profit</span>
                        </div>
                    </div>

                    <div className="hero-stats animate-fadeInUp">
                        <div className="stat-item">
                            <div className="stat-number gradient-text">{count1}+</div>
                            <div className="stat-label">Happy Clients</div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <div className="stat-number gradient-text-secondary">{count2}%</div>
                            <div className="stat-label">Success Rate</div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <div className="stat-number gradient-text-accent">{count3}+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                    </div>
                </div>

                <div className="hero-visual animate-fadeIn">
                    <div className="visual-card card">
                        <div className="chart-container">
                            <div className="chart-bar" style={{ height: '60%' }}></div>
                            <div className="chart-bar" style={{ height: '80%' }}></div>
                            <div className="chart-bar" style={{ height: '95%' }}></div>
                            <div className="chart-bar" style={{ height: '70%' }}></div>
                            <div className="chart-bar" style={{ height: '88%' }}></div>
                        </div>
                        <div className="visual-overlay">
                            <div className="profit-badge">
                                <span className="profit-icon">📈</span>
                                <div>
                                    <div className="profit-label">Monthly Returns</div>
                                    <div className="profit-value">+124.5%</div>
                                </div>
                            </div>
                        </div>
                        <div className="visual-label">
                            <span>📞 Call: +91 88170 97378</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
