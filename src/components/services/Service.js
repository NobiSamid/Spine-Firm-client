import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css'

const Service = (props) => {

    //////// Reciving data from services as props then destructuring
    const {title, detail , picture, id} = props.service || {};
    // const history = useHistory();
    // const handleShowDetails = (serviceKey) =>{
    //     history.push(`/services/${serviceKey}`)
    // }
    return (
        <div className="service-card">
            <img className="service-card-img" src={picture} alt="card-pic" />
            <h5>{title}</h5>
            <p>{detail}</p>
            <Link to={`/services/${id}`}>
                <Button variant="secondary">See Details</Button>
            </Link>
        </div>
    );
};

export default Service;