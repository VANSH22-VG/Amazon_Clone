import React from "react";
import './Footer.css';
import { Link } from 'react-router-dom';



function Footer(){
    return(
        <div className="footerarea">

        <div className="footerarea__top">
            <div>Back to top</div>
        </div>
       

        <div className="footerarea__links">
            <div className="footerarea__linkarea">
                <strong>Get to know Us</strong>
            </div>
            <div className="footerarea__linkarea">
                <strong>Make money with Us</strong>
            </div>
            <div className="footerarea__linkarea">
                <strong>Amazon Payment's Product</strong>
            </div>
            <div className="footerarea__linkarea">
                <strong>Let Us help You </strong>
            </div>
        </div>
    
        </div>
    )

}
export default Footer;