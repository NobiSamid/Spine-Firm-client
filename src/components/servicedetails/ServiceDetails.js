import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

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
        <div>
            <h1>THis is service Details page of {serviceKey}</h1>
            <img src={exactService[0]?.picture} alt="detailed-item" />
            <h2>Title:{exactService[0]?.title}</h2>
            <p>{exactService[0]?.detail}</p>
            <p>{exactService[0]?.address}</p>
            <p>{exactService[0]?.email}</p>
            <p>{exactService[0]?.phone}</p>
        </div>
    );
};

export default ServiceDetails;