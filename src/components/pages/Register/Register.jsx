//
// last updated: 16/05/2021
// - adding topbar elements
// @author: msrizki
import Link from 'next/link';
import React, { Component } from 'react';
import SignUpForm from '../../elements/SignUpForm/SignUpForm';
import OtpForm from '../../elements/OtpForm/OtpForm';
import {
  Topbar
} from "../../index";
import { FaMobile } from "react-icons/fa"

class Register extends Component {

  state = {
    showOtpForm: false,
    mobilePhone: ''
  }

  handleSuccessRegister = ({ mobilePhone }) => {
    this.setState({ showOtpForm: true, mobilePhone })
  }

  handleSuccessOtp = () => {
    location.href = '/tour';
  }

  render() {
    const { showOtpForm, mobilePhone } = this.state;
    return (
      <>
        <div className="topbar">
          <Link href="/">
            <img src="http://in-poin.mahenza.com/wp-content/uploads/2021/02/inpoin_logo_svg.png" />
          </Link>
        </div>
        <div className="tilt-me-display">
          <img src="http://in-poin.mahenza.com/wp-content/uploads/2021/02/inpoin_logo_svg.png" />
          <h2 className="tilt-me-subheader">Feel The Gamification Experience</h2>
          <FaMobile className="fa-rotate" style={{ fontSize: 60, width: '100%' }} />
          <h3 className="tilt-me-header">
            Rotate your device (90 &deg;)
          </h3>
        </div>
        <div className="outer-container">
          <div className="container">
            <section>
              {showOtpForm ?
                <OtpForm action="verifyRegistration" onSuccess={this.handleSuccessOtp} mobilePhone={mobilePhone} /> :
                <SignUpForm onSuccess={this.handleSuccessRegister} />
              }
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default Register;