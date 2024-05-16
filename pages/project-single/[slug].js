import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import { useRouter } from 'next/router';
import Projects from '../../api/project';
import Benefits from './benefits';
import ServiceSidebar from './sidebar';
import Footer from '../../components/footer/Footer';
import Image from 'next/image';

const ServiceSinglePage = (props) => {
    const router = useRouter();
    const projectDetails = Projects.find(item => item.slug === router.query.slug);

    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-5'} />
            <PageTitle pageTitle={`${projectDetails?.title} Cleaning`} pagesub={'Project'} />
            <section className="wpo-service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-img">
                                    <Image src={projectDetails?.pImg} alt={projectDetails?.title} />
                                </div>
                                <div className="wpo-project-details-list">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="wpo-project-details-text">
                                                <span>Client Name</span>
                                                <h2>{projectDetails?.clientName}</h2>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="wpo-project-details-text-3">
                                                <span>Project Value</span>
                                                <h2>{projectDetails?.projectValue}</h2>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="wpo-project-details-text">
                                                <span>Date</span>
                                                <h2>{projectDetails?.date}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-service-single-content">
                                    <div className="wpo-service-single-content-des">
                                        <h2>{projectDetails?.title}</h2>
                                        <p>{projectDetails?.description1}</p>
                                        <p>{projectDetails?.description2}</p>
                                        <div className="wpo-service-single-sub-img">
                                            <ul>
                                                <li><Image src={projectDetails?.spImg1} alt="Before" /></li>
                                                <li><Image src={projectDetails?.spImg2} alt="After" /></li>
                                            </ul>
                                        </div>
                                        <p>{projectDetails?.description3}</p>
                                        <p>{projectDetails?.description4}</p>
                                    </div>
                                    <div className="wpo-service-single-content-highlights">
                                        <h3>Project Highlights</h3>
                                        <ul>
                                            {projectDetails?.highlights.map((highlight, index) => (
                                                <li key={index}>{highlight}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="wpo-related-section">
                                    <h2>Our Work Process</h2>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="wpo-related-item">
                                                <div className="wpo-related-icon">
                                                    <i className="fi flaticon-lamp"></i>
                                                </div>
                                                <div className="wpo-related-text">
                                                    <h3>Quality We Ensure</h3>
                                                    <p>We ensure the highest quality with every project, using the best techniques and materials to achieve outstanding results.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="wpo-related-item">
                                                <div className="wpo-related-icon">
                                                    <i className="fi flaticon-medal"></i>
                                                </div>
                                                <div className="wpo-related-text">
                                                    <h3>Experienced Workers</h3>
                                                    <p>Our team of skilled professionals brings years of experience to every job, ensuring efficient and effective cleaning services.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="wpo-related-item">
                                                <div className="wpo-related-icon">
                                                    <i className="fi flaticon-trophy"></i>
                                                </div>
                                                <div className="wpo-related-text">
                                                    <h3>Modern Equipment Use</h3>
                                                    <p>We use state-of-the-art equipment to deliver top-notch cleaning results, ensuring your property looks its best.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Benefits />
                            </div>
                        </div>
                        <ServiceSidebar />
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default ServiceSinglePage;

