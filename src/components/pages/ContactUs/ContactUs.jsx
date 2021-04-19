import React, { Component } from "react";
import { FaMobile } from "react-icons/fa"

import {
    Topbar,
    ContactUsView,
} from "../../index";

class ContactUs extends Component {
    render() {
        return (
            <>
                <Topbar />
                <div className="tilt-me-display">
                    <img src="http://in-poin.mahenza.com/wp-content/uploads/2021/02/inpoin_logo_svg.png"/>
                    <h2 className="tilt-me-subheader">Feel The Gamification Experience</h2>
                    <FaMobile className="fa-rotate" style={{ fontSize: 60, width: '100%' }} />
                    <h3 className="tilt-me-header">
                        Rotate your device (90 &deg;)
                    </h3>
                </div>
                <div className="outer-container scrollmenu">
                    <div className="container-contact-us draggable">
                        <section>               
                            <ContactUsView />
                        </section>                      
                    </div>
                </div>
            </>
        );
    }
}

export default ContactUs;