import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    // If on policy page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            <img src="/logo.png" alt="Shree Balaji Wealth Management" className="logo-image" />
            <span className="logo-text">Shree Balaji Wealth Management</span>
          </Link>

          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><a onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a onClick={() => scrollToSection('services')}>Services</a></li>
            <li><a onClick={() => scrollToSection('benefits')}>Benefits</a></li>
            <li><a onClick={() => scrollToSection('how-it-works')}>How It Works</a></li>
            <li><a onClick={() => scrollToSection('testimonials')}>Testimonials</a></li>
            <li><a onClick={() => scrollToSection('faq')}>FAQ</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>

          <div className="nav-actions">
            <button className="btn btn-outline" onClick={() => scrollToSection('contact')}>
              Get Started
            </button>
          </div>

          <button
            className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
