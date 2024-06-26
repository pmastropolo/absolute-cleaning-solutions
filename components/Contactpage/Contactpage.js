import React from 'react';
import ContactForm from '../ContactFrom/ContactForm'


const Contactpage = () => {

    return(
        <section className="wpo-contact-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                        <div className="office-info">
                            <div className="row">
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-placeholder"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Address</h2>
                                            <p>100 Sunflower Place</p>
                                            <p>Alabaster, AL 35007</p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-email"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Email Us</h2>
                                            <p>Email: <a href="mailto:Joshtatum@acsbirmingham.com" className="text-purple-300 hover:underline">Joshtatum@acsbirmingham.com</a></p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-phone-call"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Call Now</h2>
                                            <p>Phone: <a href="tel:(205) 612-6199">(205) 612-6199</a></p>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className="wpo-contact-title">
                            <h2>Ready to experience top-notch cleaning services?</h2>
                            <p>Contact us now to book your appointment or inquire about our offerings. If you prefer immediate support, give us a call. We're here to you achieve a spotless and comfortable environment that exceeds your expectations.</p>
                        </div>
                        <div className="wpo-contact-form-area">
                            <ContactForm/>
                        </div>
                    </div>                
                </div>
            </div> 
 <section className="wpo-contact-map-section">
    <div className="wpo-contact-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.2983179949936!2d-86.81617908502029!3d33.24432870664067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8889230017b23e83%3A0x1f62791f94c85638!2sAlabaster%2C%20AL%2C%20USA!5e0!3m2!1sen!2sbd!4v1547528325671"></iframe>
    </div>
</section>
        </section>
     )
        
}

export default Contactpage;
