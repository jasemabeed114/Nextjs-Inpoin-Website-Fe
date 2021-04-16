import React, { Component } from "react";

import {
    Navbar,
    ContactUsView,
} from "../../index";

class ContactUs extends Component {
    render() {
        return (
            <>
                <div className="topbar">
                    <img src="http://in-poin.mahenza.com/wp-content/uploads/2021/02/inpoin_logo_svg.png"></img>
                    <Navbar />
                </div>
                <div className="tilt-me-display">
                    <img src="http://in-poin.mahenza.com/wp-content/uploads/2021/02/inpoin_logo_svg.png"></img>
                    <h2 className="tilt-me-subheader">Feel The Experience</h2>
                    <h3 className="tilt-me-header"> Rotate your screen (90 &deg;)</h3>
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