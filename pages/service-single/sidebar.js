import React from 'react';
import Services from '../../api/service';
import Link from 'next/link';
import Image from 'next/image';

const ServiceSidebar = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault();
    };

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <div className="col-lg-4 col-md-8">
            <div className="wpo-single-sidebar">
                <div className="wpo-service-widget widget">
                    <h2>Our Services</h2>
                    <ul>
                        {Services.slice(0, 6).map((service, Sitem) => (
                            <li key={Sitem}>
                                <Link onClick={ClickHandler} href="/service-single/[slug]" as={`/service-single/${service.slug}`}>
                                    {service.sTitle}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="wpo-newsletter-widget widget">
                    <h2>Stay in the Loop</h2>
                    <p>Sign Up for Exclusive Updates!</p>
                    <form className="form" onSubmit={SubmitHandler}>
                        <input type="email" placeholder="Email Address" required />
                        <button type="submit">Sign Up</button>
                    </form>
                    <span>By signing up you agree to our <Link href="/privacy-policy">Privacy Policy</Link></span>
                </div>
                <div className="wpo-instagram-widget widget">
                    <h2>Instagram</h2>
                    <ul>
                        {Services.slice(0, 6).map((service, Sitem) => (
                            <li key={Sitem}>
                                <Image src={service.sImg} alt="Absolute Cleaning Solutions located in Alabama" />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="wpo-contact-widget widget">
                    <h2>Make Your Home Shine Now!</h2>
                    <p>Don't wait! Absolute Cleaning Solutions offers unbeatable pressure washing, gutter cleaning, house washing, and roof washing services. Join countless happy customers who've transformed their homes. Don't be left behind—your spotless home awaits!</p>
                    <Link href="/contact">Get Your Free Quote Today!</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceSidebar;
