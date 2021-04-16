import Link from 'next/link';
import React, { Component } from 'react';
import SignInForm from '../../elements/SignInForm/SignInForm';
import OtpForm from '../../elements/OtpForm/OtpForm';

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
        <div className="topbar">
          <Link href="/">
            <img src="http://in-poin.mahenza.com/wp-content/uploads/2021/02/inpoin_logo_svg.png"></img>
          </Link>
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