import React, { Component } from 'react';
import SignUpForm from '../../elements/SignUpForm/SignUpForm';
import OtpForm from '../../elements/OtpForm/OtpForm';

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
          <img src="http://in-poin.mahenza.com/wp-content/uploads/2021/02/inpoin_logo_svg.png"></img>
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