import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Residential from './Residential';
import Commercial from './Commercial';


const ServiceSectionS2 = (props) => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }


    return (
        <section className="wpo-service-section-s2 section-padding">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-5">
                        <div className="wpo-section-title-s2">
                        <h2>Our Services</h2>
<p>At Absolute Cleaning Solutions, we specialize in delivering top-tier cleaning services that leave your property spotless. From pressure washing to gutter cleaning, our expert team ensures exceptional results with every service.</p>

                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="wpo-service-tabs">
                            <Nav tabs>
                                <NavItem>
                                    <NavLink
                                        className={`theme-btn ${classnames({ active: activeTab === '1' })}`}
                                        onClick={() => { toggle('1'); }}
                                    >
                                        <i className="ti-home"></i> Residential
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={`theme-btn ${classnames({ active: activeTab === '2' })}`}
                                        onClick={() => { toggle('2'); }}
                                    >
                                        <i className="ti-brush-alt"></i> Commercial
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                    </div>
                </div>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Residential/>
                    </TabPane>
                    <TabPane tabId="2">
                        <Commercial/>
                    </TabPane>
                </TabContent>
            </div>
        </section>

    )
}

export default ServiceSectionS2;