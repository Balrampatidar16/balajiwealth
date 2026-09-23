import './Services.css';

const Services = () => {
    const services = [
        {
            icon: '📊',
            title: 'Expert Trade Execution',
            description: 'Our SEBI-registered analysts execute strategic trades based on comprehensive market analysis and proven strategies.'
        },
        {
            icon: '🛡️',
            title: 'Risk Management',
            description: 'Tailored risk management strategies aligned with your investment goals and capital allocation preferences.'
        },
        {
            icon: '💰',
            title: 'Profit-Sharing Model',
            description: 'Flexible profit-sharing structure - you only pay when your portfolio generates net profits.'
        },
        {
            icon: '📈',
            title: 'Intraday Trading',
            description: 'Specialized focus on Nifty, Bank Nifty, and Sensex options with proven intraday strategies.'
        },
        {
            icon: '🔒',
            title: 'Full Account Control',
            description: 'Maintain complete control of your Demat account with freedom to add or withdraw funds anytime.'
        },
        {
            icon: '📱',
            title: 'Real-Time Updates',
            description: 'Access our exclusive Telegram channel for live trade updates and account handling support.'
        },
        {
            icon: '🎓',
            title: 'Trading Education',
            description: 'Comprehensive training programs and market insights to help you understand trading strategies and market dynamics.'
        },
        {
            icon: '📉',
            title: 'Stop Loss Protection',
            description: 'Advanced stop-loss mechanisms to protect your capital and minimize losses during market volatility.'
        },
        {
            icon: '💼',
            title: 'Portfolio Diversification',
            description: 'Strategic portfolio management across multiple instruments to optimize returns and reduce risk exposure.'
        },
        {
            icon: '🔔',
            title: 'Market Alerts',
            description: 'Instant notifications for important market movements, trade executions, and portfolio updates via multiple channels.'
        }
    ];

    return (
        <section className="services" id="services">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="animate-fadeInUp">Our Account Handling Services</h2>
                    <p className="section-subtitle animate-fadeInUp">
                        Comprehensive trading solutions designed to maximize your returns while minimizing risks
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card card animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
