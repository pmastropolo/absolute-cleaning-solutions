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
            <h2>Why Choose Absolute Cleaning Solutions?</h2>
            <div className="row">
                <div className="col-lg-12 col-12">
                    <div className="wpo-benefits-item">
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={''}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography>Expertise and Professionalism</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Our team consists of highly trained professionals who bring years of experience to every job. We ensure top-notch service with meticulous attention to detail.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                expandIcon={''}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <Typography>Eco-Friendly Solutions</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    We use eco-friendly cleaning solutions that are safe for the environment and your property. Our methods are effective yet gentle, ensuring thorough cleaning without damage.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                                expandIcon={''}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <Typography>Comprehensive Services</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    From pressure washing and gutter cleaning to window cleaning and roof washing, we offer a wide range of services to meet all your cleaning needs. Our comprehensive approach ensures every part of your property looks its best.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary
                                expandIcon={''}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <Typography>Customer Satisfaction Guarantee</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    We prioritize customer satisfaction above all else. Our commitment to quality and excellence ensures that you’ll be delighted with our services. We strive to exceed your expectations every time.
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
