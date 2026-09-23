import { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = [
        {
            name: 'Rajesh Kumar',
            role: 'Business Owner',
            image: '👨‍💼',
            rating: 5,
            text: 'Outstanding service! My portfolio has grown by 35% in just 6 months. The team is professional, transparent, and truly understands market dynamics.'
        },
        {
            name: 'Priya Sharma',
            role: 'IT Professional',
            image: '👩‍💻',
            rating: 5,
            text: 'As someone with a busy schedule, having experts manage my trading account has been a game-changer. Consistent profits without the stress!'
        },
        {
            name: 'Amit Patel',
            role: 'Entrepreneur',
            image: '👨‍💼',
            rating: 5,
            text: 'The profit-sharing model is brilliant. I only pay when I profit, and the returns have exceeded my expectations. Highly recommended!'
        }
    ];

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="testimonials" id="testimonials">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="animate-fadeInUp">What Our Clients Say</h2>
                    <p className="section-subtitle animate-fadeInUp">
                        Real success stories from traders who trust us with their accounts
                    </p>
                </div>

                <div className="testimonial-slider">
                    <button className="slider-btn prev" onClick={prevTestimonial}>←</button>

                    <div className="testimonial-card card">
                        <div className="stars">
                            {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                <span key={i} className="star">⭐</span>
                            ))}
                        </div>
                        <p className="testimonial-text">"{testimonials[activeIndex].text}"</p>
                        <div className="testimonial-author">
                            <div className="author-image">{testimonials[activeIndex].image}</div>
                            <div className="author-info">
                                <div className="author-name">{testimonials[activeIndex].name}</div>
                                <div className="author-role">{testimonials[activeIndex].role}</div>
                            </div>
                        </div>
                    </div>

                    <button className="slider-btn next" onClick={nextTestimonial}>→</button>
                </div>

                <div className="slider-dots">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
