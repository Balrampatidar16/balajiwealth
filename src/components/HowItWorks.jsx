import './HowItWorks.css';

const HowItWorks = () => {
    const steps = [
        {
            number: '01',
            title: 'Enrollment Process',
            description: 'Complete a simple one-time enrollment with our team. Get assigned a dedicated account manager who understands your trading goals.',
            icon: '📝'
        },
        {
            number: '02',
            title: 'Expert Analysis',
            description: 'Our SEBI-registered analysts conduct comprehensive market research and identify profitable trading opportunities.',
            icon: '🔍'
        },
        {
            number: '03',
            title: 'Strategic Execution',
            description: 'Trades are executed based on expert recommendations, tailored to your capital and risk management preferences.',
            icon: '⚡'
        },
        {
            number: '04',
            title: 'Profit Sharing',
            description: 'Enjoy transparent profit-sharing model. You only pay when your portfolio generates net profits - completely performance-based.',
            icon: '💎'
        }
    ];

    return (
        <section className="how-it-works" id="how-it-works">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="animate-fadeInUp">How It Works</h2>
                    <p className="section-subtitle animate-fadeInUp">
                        Simple, transparent process to get started with professional account handling
                    </p>
                </div>

                <div className="steps-container">
                    {steps.map((step, index) => (
                        <div key={index} className="step-item animate-fadeInUp" style={{ animationDelay: `${index * 0.15}s` }}>
                            <div className="step-number">{step.number}</div>
                            <div className="step-content card">
                                <div className="step-icon">{step.icon}</div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                            {index < steps.length - 1 && <div className="step-connector"></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
