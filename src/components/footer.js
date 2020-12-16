import React from "react";
import {ReactComponent as FacebookIcon} from "../assets/icons/facebook.svg"
import {ReactComponent as InstagramIcon} from "../assets/icons/instagram.svg"

const Footer = () => {
    return (
        <div className="footer">
            <p>Copyright @2020</p>
            <div className="social">
                <FacebookIcon className="fa"/>
                <InstagramIcon className="fa"/>
            </div>
        </div>
        )
}  
export default Footer
