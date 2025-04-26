import { NavLink } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container grid footer-grid grid-three-cols">
                <div className="footer-about">
                    <h3>Lawyer</h3>
                    <p>Professional, experienced, and ready to help you navigate your legal challenges. Get in touch for a consultation today.</p>
                </div>

                <div className="footer-nav">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3>Contact</h3>
                    <p>1234567890</p>
                    <p>contact@lawyer.com</p>
                    <p>Your City, Your Country</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 Lawyer. All rights reserved.</p>
            </div>
        </footer>
    );
};
