import React from 'react';
import wImg1 from '/public/images/work/1.jpg';
import wImg2 from '/public/images/work/2.jpg';
import wImg3 from '/public/images/work/3.jpg';
import Image from 'next/image';

const WorkSection = () => {
    return (
        <section className="wpo-work-section section-padding">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-5">
                        <div className="wpo-section-title">
                            <h2>Our Process</h2>
                            <p>Discover how Absolute Cleaning Solutions delivers top-tier cleaning services with unmatched efficiency and quality.</p>
                        </div>
                    </div>
                </div>
                <div className="wpo-work-wrap">
                    <div className="row">
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="wpo-work-item">
                                <div className="wpo-work-img">
                                    <Image src={wImg1} alt="Easy Online Scheduling"/>
                                </div>
                                <div className="wpo-work-text">
                                    <h2>Easy Online Booking</h2>
                                    <p>Schedule your cleaning in minutes with our user-friendly online system.</p>
                                </div>
                                <div className="visible-text">
                                    <span>1</span>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="wpo-work-item">
                                <div className="wpo-work-img">
                                    <Image src={wImg2} alt="Get Clean and Fresh"/>
                                </div>
                                <div className="wpo-work-text">
                                    <h2>Professional Cleaning</h2>
                                    <p>Our experts provide thorough cleaning services, ensuring your space shines.</p>
                                </div>
                                <div className="visible-text">
                                    <span>2</span>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="wpo-work-item">
                                <div className="wpo-work-img">
                                    <Image src={wImg3} alt="Enjoy Happy Cleanliness"/>
                                </div>
                                <div className="wpo-work-text">
                                    <h2>Enjoy the Results</h2>
                                    <p>Relax and relish in a spotless environment. Satisfaction guaranteed.</p>
                                </div>
                                <div className="visible-text">
                                    <span>3</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkSection;

