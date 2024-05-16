import React from "react";
import Link from "next/link";

const Hero3 = () => {
    return (
        <section className="wpo-hero-section-2">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-5 col-lg-5 col-12">
                        <div className="wpo-hero-section-text">
                            <div className="wpo-hero-title">
                                <h2>Ready for a Spotless Home?</h2>
                            </div>
                            <div className="wpo-hero-subtitle">
                                <p>Discover the magic of Absolute Cleaning Solutions! We offer top-notch pressure washing, gutter cleaning, house washing, and roof washing services. Don’t miss out on a pristine home!</p>
                            </div>
                            <div className="btns">
                                <Link href="/contact" className="btn theme-btn"><i className="fa fa-angle-double-right"
                                        aria-hidden="true"></i> Get Your Free Quote!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-vec">
                <div className="right-img">
                </div>
            </div>
        </section>
    );
};

export default Hero3;
