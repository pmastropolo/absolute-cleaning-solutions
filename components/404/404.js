import React from 'react'
import Link from 'next/link'
import erimg from '/public/images/error-404.png'
import Image from 'next/image'


const Error = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <section className="error-404-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="content clearfix">
                            <div className="error">
                                <Image src={erimg} alt="404 Image"/>
                            </div>
                            <div className="error-message">
                                <h3>Oops! Where are we?</h3>
                                <p>We are unable to find the page you are looking for.</p>
                                <Link onClick={ClickHandler} href="/home" className="theme-btn"><i className='fi flaticon-house'></i> Back to home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Error;