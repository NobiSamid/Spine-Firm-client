import React, { useState, useEffect } from 'react';
import Service from './Service';
import "./Services.css"

const Services = () => {

    ///////// Fetching services data with useEffect then setting it in a State
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('/fakedata.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[]);

    return (
        <div className="servicesmain">
            {
                services?.map(service =><Service
                key={service.id}
                service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;