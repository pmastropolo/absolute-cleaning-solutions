import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer.js';

const AccessibilityStatement = (props) => {
    const styles = {
        container: {
            padding: '40px',
            fontFamily: 'Georgia, serif',
            color: '#2C3E50',
            backgroundColor: '#f9f9f9',
            lineHeight: '1.8',
        },
        h1: {
            color: '#1F3A93',
            fontSize: '36px',
            fontWeight: '700',
            borderBottom: '2px solid #1F3A93',
            paddingBottom: '10px',
            marginBottom: '30px',
        },
        h2: {
            fontSize: '28px',
            fontWeight: '600',
            color: '#0A3D62',
            marginTop: '30px',
            marginBottom: '20px',
        },
        p: {
            fontSize: '18px',
            marginBottom: '20px',
        },
        a: {
            color: '#3498db',
            textDecoration: 'none',
            transition: 'color 0.3s',
        },
        aHover: {
            color: '#2980b9',
        },
        ul: {
            listStyleType: 'disc',
            paddingLeft: '20px',
        },
        li: {
            marginBottom: '10px',
        },
    };

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Accessibility Statement'} pagesub={'Accessibility Statement'} />
            <section className="wpo-accessibility-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="wpo-accessibility-wrap">
                                <div className="wpo-accessibility-text" style={styles.container}>
                                    <h1 style={styles.h1}>Accessibility Statement for ACS Birmingham</h1>
                                    <p style={styles.p}>This is an accessibility statement from Absolute Cleaning Solutions LLC.</p>

                                    <h2 style={styles.h2}>Measures to support accessibility</h2>
                                    <p style={styles.p}>Absolute Cleaning Solutions LLC takes the following measures to ensure accessibility of ACS Birmingham:</p>
                                    <ul style={styles.ul}>
                                        <li style={styles.li}>Provide continual accessibility training for our staff.</li>
                                        <li style={styles.li}>Assign clear accessibility goals and responsibilities.</li>
                                    </ul>

                                    <h2 style={styles.h2}>Conformance status</h2>
                                    <p style={styles.p}>The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. ACS Birmingham is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.</p>

                                    <h2 style={styles.h2}>Feedback</h2>
                                    <p style={styles.p}>We welcome your feedback on the accessibility of ACS Birmingham. Please let us know if you encounter accessibility barriers on ACS Birmingham:</p>
                                    <ul style={styles.ul}>
                                        <li style={styles.li}>Phone: <a href="tel:12056126199" style={styles.a}>12056126199</a></li>
                                        <li style={styles.li}>E-mail: <a href="mailto:joshtatum@acsbirmingham.com" style={styles.a}>joshtatum@acsbirmingham.com</a></li>
                                        <li style={styles.li}>Postal Address: 100 Sunflower Place, Alabaster, Alabama</li>
                                    </ul>
                                    <p style={styles.p}>We try to respond to feedback within 1 business day.</p>

                                    <h2 style={styles.h2}>Limitations and alternatives</h2>
                                    <p style={styles.p}>Despite our best efforts to ensure accessibility of ACS Birmingham, there may be some limitations. Below is a description of known limitations, and potential solutions. Please contact us if you observe an issue not listed below.</p>
                                    <h2 style={styles.h2}>Known limitations for ACS Birmingham:</h2>
                                    <p style={styles.p}>1. Uploaded images may not have text alternatives because...</p>

                                    <h2 style={styles.h2}>Assessment approach</h2>
                                    <p style={styles.p}>Absolute Cleaning Solutions LLC assessed the accessibility of ACS Birmingham by the following approaches:</p>
                                    <ul style={styles.ul}>
                                        <li style={styles.li}>Self-evaluation</li>
                                    </ul>

                                    <h2 style={styles.h2}>Date</h2>
                                    <p style={styles.p}>This statement was created on 8 January 2024 using the W3C Accessibility Statement Generator Tool.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default AccessibilityStatement;
