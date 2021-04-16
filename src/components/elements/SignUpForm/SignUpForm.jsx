import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Link from 'next/link';
import {
  Container,
  Form,
  DataGroup,
  DataLabelGroup,
  ImportantSign,
  DataLabel,
  DataInput,
  SubmitButton,
} from './SignUpForm.elements';
import { getAccessToken, register } from '../../../actions';
import { userIdentifierStorage } from '../../../utils/storage';

function SignUpForm({ onSuccess }) {

  const [ errorMessage, setErrorMessage ] = useState('');

  useEffect(() => {
    getAccessToken();

    if(!userIdentifierStorage.get()) {
      userIdentifierStorage.set(nanoid(32));
    }
  }, []);

  const clearErrorMessage = () => {
    if(errorMessage) setErrorMessage('');
  }

  const [ fullName, setFullName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ mobilePhone, setMobilePhone ] = useState('');
  const [ pin, setPin ] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await register({
        fullName,
        email,
        mobilePhone,
        pin
      });
  
      onSuccess({ mobilePhone: response.data.mobilePhone });
    } catch(error) {
      setErrorMessage(error.message);
    }

  };

  return (
    <Container>
      <Form>
        <DataGroup>
          <DataLabelGroup>
            <DataLabel>Full Name</DataLabel>
            <ImportantSign> * </ImportantSign>
          </DataLabelGroup>
          <DataInput
            onChange={(e) => setFullName(e.target.value)}
            onFocus={clearErrorMessage}
            placeholder={'John Doe'}
            required
            value={fullName}
          />
        </DataGroup>
        <DataGroup>
          <DataLabelGroup>
            <DataLabel>Email</DataLabel>
            <ImportantSign>*</ImportantSign>
          </DataLabelGroup>
          <DataInput
            onChange={(e) => setEmail(e.target.value)}
            onFocus={clearErrorMessage}
            placeholder={'john.doe@gmail.com'}
            required
            value={email}
          />
        </DataGroup>
        <DataGroup>
          <DataLabelGroup>
            <DataLabel>Contact Number</DataLabel>
            <ImportantSign>*</ImportantSign>
          </DataLabelGroup>
          <DataInput
            onChange={(e) => setMobilePhone(e.target.value)}
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
            onChange={(e) => setPin(e.target.value)}
            onFocus={clearErrorMessage}
            required
            type="password"
            value={pin}
          />
        </DataGroup>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <SubmitButton onClick={handleSubmit}>Sign Up</SubmitButton>
        <p>Already have account?, <Link href="/login">login</Link> </p>
      </Form>
    </Container>
  );
}

export default SignUpForm;
