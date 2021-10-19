import React from 'react';
import { Accordion } from 'react-bootstrap';
import Services from '../services/Services';
import Banner from './Banner';
import Chart from './Chart';

const Home = () => {
    return (
        <div>
            {/* Banner of Home component */}
            <div>
                <Banner></Banner>
            </div>

            {/* Services that provided via thi website chart with ReChart */}
            <div className="home-chart">
                <Chart></Chart>
            </div>

            {/* Services component */}
            <div>
                <Services></Services>
            </div>

            {/* FAQ section by using React Accordion  */}
            <div className="faq">
                <h2>Friquently Asked Question</h2>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Is it safe to have chiropractic adjustment?</Accordion.Header>
                        <Accordion.Body>
                            Yes, only if you are treated by someone trained and licenced to a deliver this care.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Do acupuncture needles pierce the skin?</Accordion.Header>
                        <Accordion.Body>
                            They're hollow and so slender that you may not even feel them when the practitioner puts them into your skin.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Is paraffin wax bath good for arthritis?</Accordion.Header>
                        <Accordion.Body>
                            Heat treatments like paraffin wax baths can be enormously helpful for relieving the joint pain and stiffness of arthritis.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>How much do Chinese herbs cost?</Accordion.Header>
                        <Accordion.Body>
                           A month's supply of herbs cost between $30 and $50
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Home;