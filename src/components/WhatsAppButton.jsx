import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '918817097378'; // WhatsApp number in international format
  const message = 'Hello! I am interested in your wealth management and stock market advisory services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contact us on WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="whatsapp-icon">
        <path fill="currentColor" d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-4.713 1.262 1.262-4.669-0.292-0.508c-1.207-2.100-1.847-4.507-1.847-6.924 0-7.435 6.050-13.485 13.485-13.485s13.485 6.050 13.485 13.485c0 7.435-6.050 13.485-13.485 13.485zM21.305 18.694c-0.372-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.186-0.837 0.186s-0.961 1.208-1.179 1.456c-0.217 0.248-0.434 0.279-0.806 0.093s-1.571-0.579-2.991-1.845c-1.107-0.986-1.854-2.203-2.071-2.575s-0.023-0.573 0.163-0.758c0.167-0.167 0.372-0.434 0.558-0.651s0.248-0.372 0.372-0.62c0.124-0.248 0.062-0.465-0.031-0.651s-0.837-2.010-1.147-2.751c-0.303-0.723-0.611-0.62-0.837-0.634-0.217-0.011-0.465-0.014-0.713-0.014s-0.651 0.093-0.992 0.465c-0.341 0.372-1.301 1.270-1.301 3.096s1.332 3.589 1.518 3.837c0.186 0.248 2.579 3.938 6.256 5.524 0.874 0.378 1.556 0.604 2.088 0.773 0.878 0.279 1.677 0.24 2.308 0.145 0.704-0.105 2.197-0.899 2.506-1.766s0.310-1.611 0.217-1.766c-0.093-0.155-0.341-0.248-0.713-0.434z"/>
      </svg>
      <span className="whatsapp-text">Chat with Us</span>
    </a>
  );
};

export default WhatsAppButton;
