import React from 'react';
import { Component } from 'react';
import IG from '/insta.webp'

class Footer extends Component {

    render() {
        return (
            <footer>
                <div className="footer">
                    <div className="row">
                    <a href="https://www.instagram.com/fromeddwuardoo/"><img src={IG} alt="instagram" width="50rem" height="50rem" /></a>
                    </div>

                    <div className="row">
                    <ul>
                    <li><a href="contact.html">Contact us</a></li>
                    <li><a href="shop.html">Our Services</a></li>
                    <li><a href="https://www.roadtohire.org/privacy-policy">Privacy Policy</a></li>
                    <li><a href="https://help.instagram.com/581066165581870/">Terms & Conditions</a></li>
                    <li><a href="https://www.roadtohire.org/students/apprenticeships">Career</a></li>
                    </ul>
                    </div>

                <div className="row">
                edd's digital library &copy; 2025- All rights reserved
                </div>
                </div>
            </footer>
        )
    }
}

export default Footer;