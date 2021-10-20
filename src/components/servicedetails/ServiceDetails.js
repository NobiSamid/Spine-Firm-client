import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import "./ServiceDetails.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMap } from '@fortawesome/free-solid-svg-icons';

const ServiceDetails = () => {

    /////////// passing data by useParams hook for dynamic routing
    const {serviceKey} = useParams();

    /// feching data from fake database then setting it in a State
    const [detail, setDetail] = useState([]);
    useEffect(()=>{
        fetch("/fakedata.json")
        .then(res=>res.json())
        .then(data=> setDetail(data))
    },[])

    //// Converting the data from useParams in to Integer then Filtering out the required object
    const key = parseInt(serviceKey);
    const exactService = detail.filter(es => es.id === key);
    // console.log(exactService)

    return (
        <div className="details">
            <h1>Showing {serviceKey} number service component details</h1>
            <img src={exactService[0]?.picture} alt="detailed-item" />
            <h2>{exactService[0]?.title}</h2>
            <p>{exactService[0]?.detail}</p>
            <p><FontAwesomeIcon icon={faMap}></FontAwesomeIcon> {exactService[0]?.address}</p>
            <h6>Contact here for appoinment</h6>
            <p>Email: {exactService[0]?.email}</p>
            <p><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> {exactService[0]?.phone}</p>
        </div>
    );
};

export default ServiceDetails;