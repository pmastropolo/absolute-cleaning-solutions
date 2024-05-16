import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Benefits = (props) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className="wpo-benefits-section">
            <h2>Why Choose Our Services?</h2>
            <div className="row">
                <div className="col-lg-12 col-12">
                    <div className="wpo-benefits-item">
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={''}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography>Top-Notch Expertise and Professionalism</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    At Absolute Cleaning Solutions, our team of highly trained professionals brings years of experience to every job. We ensure exceptional service with meticulous attention to detail, guaranteeing your property looks its best.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                expandIcon={''}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <Typography>Eco-Friendly Cleaning Solutions</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    We prioritize the environment by using eco-friendly cleaning solutions that are safe for your property and the planet. Our methods are effective yet gentle, ensuring thorough cleaning without any damage.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                                expandIcon={''}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <Typography>Comprehensive Service Offerings</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    From pressure washing and gutter cleaning to window cleaning and roof washing, we offer a wide range of services to meet all your cleaning needs. Our comprehensive approach ensures every part of your property looks pristine.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary
                                expandIcon={''}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <Typography>Unmatched Customer Satisfaction</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Customer satisfaction is our top priority. We are dedicated to providing high-quality services that exceed your expectations. With Absolute Cleaning Solutions, you can trust that your property is in good hands.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;
