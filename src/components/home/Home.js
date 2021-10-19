import React from 'react';
import Services from '../services/Services';
import Banner from './Banner';
import Chart from './Chart';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <Chart></Chart>
            </div>
            <div>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;