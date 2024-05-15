import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const FAQ = (props) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className="wpo-benefits-section">
            <h2>Frequently Ask Questions</h2>
            <div className="row">
                <div className="col-lg-12 col-12">
                    <div className="wpo-benefits-item">
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={''}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography>What services does Absolute Cleaning Solutions offer?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                    Absolute Cleaning Solutions offers a range of services including pressure washing, gutter cleaning, and window cleaning for both residential and commercial properties.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                expandIcon={''}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                 <Typography>How often should I have my gutters cleaned?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                    It is recommended to have your gutters cleaned at least twice a year, typically in the spring and fall, to prevent blockages and water damage.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                                expandIcon={''}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <Typography>Are your cleaning methods safe for all surfaces?</Typography>
                
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                    Yes, our team is trained to use the appropriate cleaning methods for different surfaces to ensure effective cleaning without causing any damage.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary
                                expandIcon={''}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <Typography>Do you offer free estimates?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                    Yes, Absolute Cleaning Solutions offers free estimates for all our services. Contact us to schedule an appointment.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FAQ;