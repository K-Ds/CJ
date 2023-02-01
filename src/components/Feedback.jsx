import React from 'react';
import '../styles/Feedback.css';
import { IconContext } from 'react-icons';
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa'


export default function Feedback() {
    return (
        <section className="feedback-section">
            <div className="socials">
                <IconContext.Provider value={{
                    className: 'social-icon',
                }}>
                    <FaFacebookSquare />
                </IconContext.Provider>
                <IconContext.Provider value={{
                    className: 'social-icon',
                }}>
                    <FaInstagram />
                </IconContext.Provider>
                <IconContext.Provider value={{
                    className: 'social-icon',
                }}>
                    <FaTwitterSquare />
                </IconContext.Provider>
            </div>
            <div className="subscribe">
                <p>Join our email list</p>

                <div className="input-group">
                    <input type="email" className="input" placeholder="Enter your email address" />
                    <button className="btn-input">Subscribe</button>
                </div>
                <p>By clicking "SUBSCRIBE" I agree to receive news, promotions, information, and offers from CJ's.</p>
            </div>
        </section>
    )
}
