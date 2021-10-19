import React from 'react';
import "./About.css";

const Doc = (props) => {
    const {name, gender, registered, phone, email, address } = props.doc || {};
    return (
        <div className="doc-card">
            <h3>{name}</h3>
            <p>{gender}</p>
            <p>Registred: {registered}</p>
            <p>Phone: {phone}</p>
            <p>email: {email}</p>
            <p>Address: {address}</p>
        </div>
    );
};

export default Doc;