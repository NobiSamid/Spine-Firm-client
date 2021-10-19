import React, { useEffect, useState } from 'react';
import Doc from './Doc';
import "./About.css"

//////////// This is About Website page

const About = () => {

    //////// Calling by useEffect A fakedata of doctors then setting and keeping in State
    const [docs, setDoc] = useState([]);

    useEffect(()=>{
        fetch('./fakedoc.json')
        .then(res=>res.json())
        .then(data=>setDoc(data))
    },[])

    return (
        <div>
            {/***********  About us ************/}
            <div className="about-details">
                <h2>About us</h2>
                <p>
                    Many cultures in ancient times treated illnesses with magic and herbal remedies. People believed that the supernatural powers of a shaman (sha-man), also known as a medicine man or witch doctor, healed the sick. Ancient Egyptians thought that their gods healed them. They also treated illnesses with herbal medicines and performed surgeries with metal instruments. Historians believe that Egyptians learned how diseases affected the human body when they performed burial rituals. When people died, they prepared them for the afterlife in a process called mummification. Before the body was wrapped in cloths, they removed organs and placed them in clay jars for preservation.<br/>
                    So, We want to provide the service where our patient get proper treatment without any side effect unlike useEffect.
                </p>
            </div><br/>

            {/***********  About Our Doctors ************/}
            <h2>Our Doctors</h2>
            <div className="doc-list">
                {
                    docs.map(doc =><Doc 
                    key={doc._id}
                    doc={doc}
                    ></Doc>)
                }
            </div>
        </div>
    );
};

export default About;