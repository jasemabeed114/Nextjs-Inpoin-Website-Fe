import React, { useState } from 'react';
import {
  Container,
  Form,
  DataGroup,
  DataLabelGroup,
  ImportantSign,
  DataLabel,
  DataInput,
  SubmitButton,
} from '../SignUpForm/SignUpForm.elements';
import { verifyRegistration, verifyNewDevice } from '../../../actions';

function SignUpOtp({ onSuccess, mobilePhone, action }) {

  const [otp, setOtp] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(action === 'verifyRegistration') {
      await verifyRegistration({
        mobilePhone,
        otp
      });
    }

    if(action === 'verifyNewDevice') {
      await verifyNewDevice({
        mobilePhone,
        otp
      });
    }

    onSuccess();
  };

  return (
    <Container>
      <Form>
        <DataLabel>kode verifikasi dikirimkan ke +{mobilePhone}</DataLabel>
        <DataGroup>
          <DataLabelGroup>
            <DataLabel>OTP</DataLabel>
            <ImportantSign> * </ImportantSign>
          </DataLabelGroup>
          <DataInput
            maxLength="4"
            onChange={(e) => setOtp(e.target.value)}
            placeholder={'1234'}
            required
            value={otp}
          />
        </DataGroup>
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      </Form>
    </Container>
  );
}

export default SignUpOtp;