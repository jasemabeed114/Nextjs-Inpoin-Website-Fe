import Link from 'next/link';
import React, { Component } from 'react';
import SignInForm from '../../elements/SignInForm/SignInForm';
import OtpForm from '../../elements/OtpForm/OtpForm';
import {
  Topbar
} from "../../index";
import { FaMobile } from "react-icons/fa"

class Login extends Component {

  state = {
    showOtpForm: false,
    mobilePhone: ''
  }

  _handleSuccessLogin = () => {
    location.href = '/tour';
  }

  _handleSuccessOtp = () => {
    location.href = '/tour';
  }

  _handleFailedLogin = ({ error, mobilePhone }) => {
    if(error.code === 403) this.setState({ showOtpForm: true, mobilePhone });
  }

  render() {
    const { showOtpForm, mobilePhone } = this.state;
    return (
      <>
        <Topbar/>
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
                <OtpForm action="verifyNewDevice" onSuccess={this._handleSuccessOtp} mobilePhone={mobilePhone} /> :
                <SignInForm onSuccess={this._handleSuccessLogin} onFailed={this._handleFailedLogin} />
              }
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default Login;