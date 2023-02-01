import React from 'react'
import "../styles/Footer.css"

export default function Footer() {
    const contacts = [
        {
            name: "Koinange street",
            tel: ["+254 792 000 090", "+254 795 000 090"]
        },
        {
            name: "The Waterfront Mall, Karen",
            tel: ["+254 701 000 090", "+254 702 000 090"]
        },
        {
            name: "Village street",
            tel: ["+254 796 000 090", "+254 799 000 090"]
        },

        {
            name: "Kilimani",
            tel: ["+254 712 000 033", "+254 712 000 011"]
        },
    ]
    return (
        <div className='footer-container'>
            <div className="footer-top">
                <div className="contacts">
                    <header className="header">
                        CONTACT US
                    </header>
                    <div className="contacts-list">
                        {contacts.map((contact, i) => {
                            return (
                                <div className="contact-card" key={i}>
                                    <p className="contact-name">{contact.name}</p>
                                    <a className="contact-tel" href={`tel: ${contact.tel[0]}`}>{contact.tel[0]}</a>
                                    <a className="contact-tel" href={`tel: ${contact.tel[1]}`}>{contact.tel[1]}</a>
                                </div>
                            )

                        })}
                    </div>
                </div>

                <div className="menu">
                    <header className="header">MENU</header>
                    <ul className="menu-list">
                        <li className="menu-item"><a href="#">BREAKFAST</a></li>
                        <li className="menu-item"><a href="#">MAINS</a></li>
                        <li className="menu-item"><a href="#">DRINKS</a></li>
                        <li className="menu-item"><a href="#">DESSERTS</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <span className='commitment_text'>We're commited to great food, great coffee, great service, an experience that will make your time with us fabulous. All visuals are serving suggestions only. Prices are quoted in Kenyan Shillings and inclusive of VAT.</span>
                <div className='footer-links'>
                    <a href="#" className="link-item">Privacy Policy</a>
                    <a href="#" className="link-item">Terms of Use</a>
                    <a href="#" className="link-item">Careers</a>
                    <a href="#" className="link-item last">Feedback</a>
                </div>
                <span className="copyright">© 2023 CJ's. All Rights Reserved</span>
            </div>
        </div >
    )
}
