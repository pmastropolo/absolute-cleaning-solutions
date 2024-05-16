import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Pricing from '../../components/Pricing/Pricing';

const PricingPage = () => {
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Our Pricing Plans'} pagesub={'Pricing'} />
            <Pricing />
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default PricingPage;
