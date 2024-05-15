import React from 'react'
import abimg from '/public/images/about-josh-tatum-owner-of-absolute-cleaning-solutions.jpg'
import sign from '/public/images/signeture.png'
import Image from 'next/image'


const About = (props) => {
    return(
        <section className="wpo-about-section section-padding">
            <div className="container">
                <div className="wpo-about-section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12 col-12">
                            <div className="wpo-about-img">
                                <Image src={abimg} alt="Josh Tatum Owner of Absolute Cleaning Solutions in Alabama" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-12">
                            <div className="wpo-about-content">
                                <div className="wpo-section-title-s2">
                                    <h2>Leadership and Integrity at the Helm: The Josh Tatum Story</h2>
                                </div>
                                <div className="wpo-about-content-inner">
                                    <p>Josh Tatum, the esteemed founder of Absolute Cleaning Solutions, has been a distinguished figure in the cleaning industry since 2013. Beyond his professional pursuits, Josh is a devoted father, an avid barbecue aficionado, and a 3D printing enthusiast. His decision to establish Absolute Cleaning Solutions stemmed from a profound desire to deliver superior cleaning services marked by meticulous professionalism and exceptional customer care.</p>
                                    <p>Josh is deeply committed to excellence, consistently ensuring that each project adheres to his rigorous standards. "I personally review every completed job to guarantee that it meets my high expectations," Josh asserts. "My primary aim is total customer satisfaction with every service we provide. Although perfection is an ideal, the feedback I receive weekly about businesses that overcharge or fail to honor commitments underscores the importance of our approach. At Absolute Cleaning Solutions, such practices are simply intolerable. We are committed to transparent communication and adhering strictly to the highest standards.</p>
                                    <div className="signeture">
                                        <h4>Josh Tatum</h4>
                                        <p>Owner of Absolute Cleaning Solutions</p>
                                        <span><Image src={sign} alt="Absolute Cleaning Solutions Brand Logo"/></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;