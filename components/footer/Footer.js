import React from 'react'
import Link from "next/link";
import Logo from '/public/images/footer-logo.svg'
import Services from '../../api/service';
import Image from 'next/image';


const ClickHandler = () => {
    window.scrollTo(10, 0);
}
const SubmitHandler = (e) => {
    e.preventDefault()
}

const Footer = (props) => {
    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Image src={Logo} alt="Absolute Cleaning Solutions Footer Small Logo"/>
                                </div>
                                <p><b>Join Our Family of Satisfied Clients!</b></p>
                                <p>At Absolute Cleaning Solutions, a family-owned gem in Alabama, we don't just clean — we care. Our personalized pressure washing service is the local secret to a pristine home.</p>
                                <p>Spots fill up fast—book now and be the pride of your community!</p>

                            </div>
                        </div>


                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Services</h3>
                                </div>
                                <ul>
                                    {Services.slice(0,6).map((service, srv) => (
                                        <li key={srv}><Link onClick={ClickHandler} href="/service-single/[slug]" as={`/service-single/${service.slug}`}>{service.sTitle}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget join-widget">
                                <div className="widget-title">
                                    <h3>Stay Updated</h3>
                                </div>
                                <p>Subscribe for Exclusive Updates and Expert Insights.</p>
                                <form onSubmit={SubmitHandler}>
                                    <input type="email" placeholder="support@gmail.com" required/>
                                    <button type="submit">Send Now <i className="ti-arrow-right"></i></button>
                                </form>
                            </div>
                        </div>


                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Service Areas</h3>
                                </div>
                                <ul>
                                    <li><Link href="/about">About Us </Link></li>
                                    <li><Link href="/service-s2">Service</Link></li>
                                    <li><Link href="/appointment">Appointment</Link></li>
                                    <li><Link href="/contact">Contact Us </Link></li>
                                    <li><Link href="/project">Projects</Link></li>
                                    <li><Link href="/terms">Terms & Conditions</Link></li>

                                </ul>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
    <div className="container">
        <div className="row">
            <div className="col col-xs-12">
                <p className="copyright">
                    Copyright &copy; 2021 Absolute Cleaning Solutions | All Rights Reserved
                </p>
            </div>
        </div>
    </div>
    <div className="container footer-links">
        <Link href="/terms-and-conditions" legacyBehavior>
            <a className="footer-link">Terms & Conditions</a>
        </Link>
        <span className="footer-separator"> | </span>
        <Link href="/privacy-policy" legacyBehavior>
            <a className="footer-link">Privacy Policy</a>
        </Link>
        <span className="footer-separator"> | </span>
        <Link href="/accessibility-statement" legacyBehavior>
            <a className="footer-link">Accessibility Statement</a>
        </Link>
    </div>
</div>

            
        </footer>
    )
}

export default Footer;