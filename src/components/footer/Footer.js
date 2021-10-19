import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="elements">

             {/************************* Footer Headings **********************/}
            <div className="element">
                <h1>Web</h1>
            </div>
            <div className="element">
                <h1>Social</h1>
            </div>
            <div className="element">
                <h1>App</h1>
            </div>

            {/************************* Footer Elements **********************/}
            <div className="element">
                <h6>Contact us</h6>
            </div>
            <div className="element">
                <h6>Instagram</h6>
            </div>
            <div className="element">
                <h6>Google Play</h6>
            </div>
            
            <div  className="element">
                <h6>Shop</h6>
            </div>
            <div className="element">
                <h6>Face Book</h6>
            </div>
            <div className="element">
                <h6>App Store</h6>
            </div>
            <div className="element">
                <h6>Blog</h6>
            </div>
            <div className="element">
                <h6>Instagram</h6>
            </div>
            <div className="element">
                <h6>Microsoft Store</h6>
            </div>
        </div>
    );
};

export default Footer;