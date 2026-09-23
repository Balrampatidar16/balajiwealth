import './Benefits.css';

const Benefits = () => {
    const benefits = [
        {
            icon: '🎯',
            title: 'Maximized Profits',
            description: 'Strategic trading approach focused on consistent profit generation through expert market analysis.',
            gradient: 'primary'
        },
        {
            icon: '⚡',
            title: 'Efficient Execution',
            description: 'Lightning-fast trade execution ensuring you never miss profitable opportunities in volatile markets.',
            gradient: 'secondary'
        },
        {
            icon: '✅',
            title: 'SEBI Compliant',
            description: 'Complete regulatory compliance with trades executed based on SEBI-registered analyst recommendations.',
            gradient: 'accent'
        },
        {
            icon: '⏰',
            title: 'Time-Saving',
            description: 'Focus on your business while our experts handle your trading account with professional care.',
            gradient: 'primary'
        }
    ];

    return (
        <section className="benefits" id="benefits">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="animate-fadeInUp">Why Choose Our Services</h2>
                    <p className="section-subtitle animate-fadeInUp">
                        Experience the advantages of professional account handling
                    </p>
                </div>

                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <div key={index} className={`benefit-card card benefit-${benefit.gradient}`} style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="benefit-icon-wrapper">
                                <div className="benefit-icon">{benefit.icon}</div>
                            </div>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
