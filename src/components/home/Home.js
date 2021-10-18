import React from 'react';
import Services from '../services/Services';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;