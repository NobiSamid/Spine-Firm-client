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
            <div>
                <Chart></Chart>
            </div>

            {/* Services component */}
            <div>
                <Services></Services>
            </div>

            {/* FAQ section by using React Accordion  */}
            <div>
                <h2>Friquently Asked Question</h2>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Is it safe to have chiropractic adjustment?</Accordion.Header>
                        <Accordion.Body>
                            Yes, only if you are treated by someone trained and licenced to a deliver this care.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Question 2</Accordion.Header>
                        <Accordion.Body>
                            something 2
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Question 3</Accordion.Header>
                        <Accordion.Body>
                            something 3
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Home;