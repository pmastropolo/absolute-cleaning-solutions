import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '/public/images/testimonial.jpg'
import Image from "next/image";


const settings = {
    dots: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
};

const testimonial = [
    {
      Des: "Cannot recommend Absolute Cleaning highly enough! Josh and his crew did a soft wash on the exterior of my home, along with exterior and interior windows, and pressure washed the drive and walkway. Excellent job!! Great attention to detail and went above and beyond quoted services. Josh was even able to remove a stain on my brick that a previous company said couldn’t be removed. I won’t use anyone else! Thanks Josh!",
      Title: 'Laurie Peters',
      Sub: "Google Review",
    },
    {
      Des: "Josh and crew are fabulous! I had windows cleaned inside and out and the exterior cleaned. He explained the scope of the project and set a date. They arrived on time, took great care of my home, and insured I was satisfied. Everything came out beautifully. Highly recommend for any cleaning job.",
      Title: 'Mike Konnie',
      Sub: "Google Review",
    },
    {
      Des: "Excellent quick work! Went the extra mile and checked my gutters also! Thanks so much!",
      Title: 'Sarah Ragan',
      Sub: "Google Review",
    },
    {
      Des: "It was a pleasure doing business with Josh Tatum. He cleaned all the windows in our home and they are SPOTLESS! His fee was very reasonable.",
      Title: 'Nina Gunnn',
      Sub: "Google Review",
    },
    {
      Des: "Josh did an amazing job pressure washing my house, driveway, sidewalk and deck! He definitely had his work cut out for him with ours. He was a pleasure to work with and I’ll be using him again for sure! Highly recommend!",
      Title: 'Sandy Faulkner',
      Sub: "Google Review",
    },
    {
      Des: "Really nice guy and he did a fantastic job cleaning our gutters and pressure washing our house! He went above and beyond by washing off and organizing our kids toys in the yard. We will use him again in the future. HIGHLY RECOMMEND!",
      Title: 'Nicolle Cespedes',
      Sub: "Google Review",
    },
    {
      Des: "We really appreciated the work Josh did on our home in Calera. He pressure washed our entire house, our porch, our back deck, our mailbox, and our driveway. He cleaned out our gutters and then we had him stain our back deck for us. He did a fantastic job.",
      Title: 'Julie Myers',
      Sub: "Google Review",
    },
    {
      Des: "I had these guys come out and pressure wash my home/driveway/decks/patio spaces. Super professional and they offered very fair pricing. They communicated well about day of service, costs, etc and were also very timely with their response.",
      Title: 'Ashley Boler',
      Sub: "Google Review",
    },
    {
      Des: "I'm a realtor in the Birmingham, Alabama Market and I recently hired Absolute Cleaning Solutions to get a client's home ready for sale, and they exceeded my expectations. Their responsiveness, reliability, and reasonable pricing made them a go-to choice for my clients.",
      Title: 'Jason Lane Garrison',
      Sub: "Google Review",
    },
    {
      Des: "Very pleased with the roof and gutter cleaning. Josh and his assistant were five stars in quality of work, professionalism, punctuality, and courtesy. Fee was entirely reasonable. Will use again. Highly recommended.",
      Title: 'David Wootton',
      Sub: "Google Review",
    },
    {
        Des: "Always a pleasure to do business with! Been using them for the past few years.",
        Title: 'David Glover',
        Sub: "Google Review",
      },
      {
        Des: "My experience with Josh and his company has been excellent! 5 Star ++. He and his team cleaned the gutters on our home and pressure washed the driveway. They were immaculate when his team finished. The gutters and the driveway needed it. Great job!",
        Title: 'Michele Hayes',
        Sub: "Google Review",
      },
      {
        Des: "Top-notch. Very professional. We had a gutter cleaning done. He was fast and did a great job. Was a lot less expensive than I thought it would be. Will have him back to clean again when needed. Also gonna have a house clean and maybe roof wash done. Excellent job.",
        Title: 'Benjamin Gottlieb',
        Sub: "Google Review",
      },
      {
        Des: "We have several large trees in our yard that clog our gutters throughout the year. We called Absolute and they gave us the best price around! The guys came out and finished the house in no time. They also cleaned the gutter dirt off of all the surrounding areas. Great job!",
        Title: 'Olivia Stiles',
        Sub: "Google Review",
      },
      {
        Des: "Cannot recommend Absolute Cleaning Solutions enough! They unclogged my gutters, performed a soft wash of my home exterior, and pressure washed my concrete. I should have taken before and after photos… but it’s made a big difference. Very pleased!",
        Title: 'Sarah Schermerhorn',
        Sub: "Google Review",
      },
      {
        Des: "Josh has cleaned our gutters and pressure washed our house and driveway. He is always responsive, professional, and goes above and beyond every single time. We recommend him to everyone we know and will continue to use him for years to come!",
        Title: 'Lauren A',
        Sub: "Google Review",
      },
      {
        Des: "Josh came out to clean the gutters after I had contacted him from a recommendation from Facebook. He went above and beyond my expectations. Very professional and fair price. He did so well he his coming back to wash my home from top to bottom. Very happy!",
        Title: 'Michael Mccullough',
        Sub: "Google Review",
      },
      {
        Des: "Came out within 15 minutes of me calling (luckily they were one street over when I called). Worked me into his schedule and quickly took care of the green growth on vinyl of my home. Looks great!!",
        Title: 'Corey Hadley',
        Sub: "Google Review",
      }
  ];
  

const Testimonial = () => {
    return (
        <section className="wpo-testimonials-section section-padding">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-5">
                        <div className="wpo-section-title">
                        <h2>What Our Clients Say</h2>
                        <p>Our clients love our top-notch quality and amazing results. Don’t miss out—choose Absolute Cleaning Solutions and join our many satisfied customers today!</p>
                        </div>
                    </div>
                </div>
                <div className="wpo-testimonials-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-12">
                            <div className="wpo-testimonials-img">
                                <Image src={ts1} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-12">
                            <div className="wpo-testimonials-text">
                                <div className="quote">
                                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                                </div>
                                <div className="wpo-testimonials-slide owl-carousel">
                                    <Slider {...settings}>
                                        {testimonial.map((tesmnl, tsm) => (
                                            <div className="wpo-testimonials-slide-item" key={tsm}>
                                                <p>{tesmnl.Des}</p>
                                                <h5>{tesmnl.Title}</h5>
                                                <span>{tesmnl.Sub}</span>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;