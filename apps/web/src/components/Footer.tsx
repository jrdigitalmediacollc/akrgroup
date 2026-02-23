import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Brand Column */}
                <div className="footer-col">
                    <div className="footer-logo-section">
                        <div className="footer-logo-circle">AKR</div>
                        <span className="footer-logo-text">AKR GROUP UAE</span>
                    </div>
                    <p className="footer-desc">
                        Your trusted partner in financial and real estate advisory services in the UAE.
                    </p>
                </div>

                {/* Quick Links Column */}
                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li><a href="#listings">Property Listings</a></li>
                        <li><a href="#financial">Financial Services</a></li>
                        <li><a href="#calculators">Calculators</a></li>
                        <li><a href="#about">About Us</a></li>
                    </ul>
                </div>

                {/* Contact Column */}
                <div className="footer-col">
                    <h3>Contact Us</h3>
                    <div className="footer-contact-item">
                        <Phone size={18} />
                        <span>+971 12 345 6789</span>
                    </div>
                    <div className="footer-contact-item">
                        <Mail size={18} />
                        <span>info@akrgroupuae.com</span>
                    </div>
                    <div className="footer-contact-item">
                        <MapPin size={18} />
                        <span>Dubai, United Arab Emirates</span>
                    </div>
                </div>

                {/* Social Column */}
                <div className="footer-col">
                    <h3>Follow Us</h3>
                    <div className="footer-social-links">
                        <a href="#" className="footer-social-btn" aria-label="Facebook">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="footer-social-btn" aria-label="Twitter">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="footer-social-btn" aria-label="Instagram">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="footer-social-btn" aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-disclaimer-box">
                <div className="footer-license">
                    AKR Realty LLC - Licensed by RERA (Real Estate Regulatory Agency) For real estate advisory services. License No: XXXXX
                </div>
                <div className="footer-license">
                    AKR Financial & Real Estate LLC - Licensed by UAE Central Bank and Insurance Authority for financial advisory services. License No: XXXXX
                </div>
                <div className="footer-disclaimer-text">
                    Important Disclaimer: All calculators and estimates provided are for advisory purposes only and do not constitute financial advice. Results are indicative and subject to approval by relevant financial institutions. Past performance does not guarantee future results. This platform does not facilitate direct transactions between clients and property listers.
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} AKR Group UAE. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
