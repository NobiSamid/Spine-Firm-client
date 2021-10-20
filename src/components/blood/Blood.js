import React from 'react';
import "./Blood.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVial, faTint, faBell, faClinicMedical, faUserCog } from '@fortawesome/free-solid-svg-icons';

const Blood = () => {

    ///////////////////// Blood Donation Chart Data
    const data = [
        {
            name: "January",
            Donor: 1500,
            amt: 2400
        },
        {
            name: "February",
            Donor: 1398,
            amt: 2210
        },
        {
            name: "March",
            Donor: 2000,
            amt: 2290
        },
        {
            name: "April",
            Donor: 2200,
            amt: 2000
        },
        {
            name: "May",
            Donor: 2500,
            amt: 2181
        },
        {
            name: "June",
            Donor: 2000,
            amt: 2500
        },
        {
            name: "July",
            Donor: 2400,
            amt: 2100
        }
    ];

    return (
        <div>
            {/********* Blod donation some data ********/}
            <h1 className="heading">Donate <span className="blood">Blood</span> <FontAwesomeIcon style={{color:"#bb0a1e"}} icon={faTint}></FontAwesomeIcon></h1><br/>
            <div className="top-section">
                <div className="top-card">
                    <h3>230</h3>
                    <p>New Blood Request</p>
                </div>
                <div className="top-card">
                    <h3>20K</h3>
                    <p>Save Lives</p>
                </div>
            </div><br/>

            {/************* Blood donation Chart **********/}
            <div className="blood-chart">
                <h1>Blood Donation Graph</h1>
                <LineChart
                className="blood-chart-main"
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="Donor"
                        stroke="#bb0a1e"
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            </div><br/>

            {/******************** Services of this blood donation page **********/}
            <div className="services-section">
                <div className="service">
                    <h1><FontAwesomeIcon icon={faVial}></FontAwesomeIcon></h1>
                    <h5>Blood test</h5>
                    <p>12K</p>
                </div>
                <div className="service">
                    <h1><FontAwesomeIcon icon={faBell}></FontAwesomeIcon></h1>
                    <h5>Blood Request</h5>
                    <p>30K</p>
                </div>
                <div className="service">
                    <h1><FontAwesomeIcon icon={faClinicMedical}></FontAwesomeIcon></h1>
                    <h5>Blood Bank</h5>
                    <p>Map</p>
                </div>
                <div className="service">
                    <h1><FontAwesomeIcon icon={faUserCog}></FontAwesomeIcon></h1>
                    <h5>Other</h5>
                    <p>More</p>
                </div>
            </div>
        </div>
    );
};

export default Blood;