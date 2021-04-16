import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
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
import { login } from '../../../actions';

function SignUpForm({ onSuccess, onFailed }) {

  const [ mobilePhone, setMobilePhone ] = useState('');
  const [ pin, setPin ] = useState('');
  const [ errorMessage, setErrorMessage ] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await login({
        mobilePhone,
        pin
      });
  
      onSuccess({ mobilePhone: response.data.mobilePhone });

    } catch(error) {
      setErrorMessage(error.message);
      onFailed({ error, mobilePhone });
    }

  };

  const clearErrorMessage = () => {
    if(errorMessage) setErrorMessage('');
  }

  const handleChangeMobilePhone = (e) => {
    setMobilePhone(e.target.value);
  };

  const handleChangePin = (e) => {
    setPin(e.target.value);
  };
  

  return (
    <Container>
      <Form>
        <DataGroup>
          <DataLabelGroup>
            <DataLabel>Contact Number</DataLabel>
            <ImportantSign>*</ImportantSign>
          </DataLabelGroup>
          <DataInput
            onChange={handleChangeMobilePhone}
            onFocus={clearErrorMessage}
            placeholder={'62'}
            required
            type="tel"
            value={mobilePhone}
          />
        </DataGroup>
        <DataGroup>
          <DataLabelGroup>
            <DataLabel>PIN</DataLabel>
            <ImportantSign>*</ImportantSign>
          </DataLabelGroup>
          <DataInput
            inputmode="numeric"
            maxlength="6"
            minlength="6"
            onChange={handleChangePin}
            onFocus={clearErrorMessage}
            required
            type="password"
            value={pin}
          />
        </DataGroup>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <SubmitButton onClick={handleSubmit}>Sign In</SubmitButton>
      </Form>
    </Container>
  );
}

export default SignUpForm;
