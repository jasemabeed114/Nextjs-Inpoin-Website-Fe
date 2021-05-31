//
// last updated: 15/06/2021
// - replacing DataInput with materialUI TextField
// - changing link color
// - spliting signup form with column
// @author: msrizki
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
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
          {/* <DataInput
            onChange={(e) => setFullName(e.target.value)}
            onFocus={clearErrorMessage}
            placeholder={'John Doe'}
            required
            value={fullName}
          /> */}
          <TextField
            id="filled-helperText"
            onChange={(e) => setFullName(e.target.value)}
            onFocus={clearErrorMessage}
            placeholder={'John Doe'}
            required
            variant="outlined"
            size="small"
            value={fullName}
          />
        </DataGroup>
        <DataGroup>
          <DataLabelGroup>
            <DataLabel>Email</DataLabel>
            <ImportantSign>*</ImportantSign>
          </DataLabelGroup>
          {/* <DataInput
            onChange={(e) => setEmail(e.target.value)}
            onFocus={clearErrorMessage}
            placeholder={'john.doe@gmail.com'}
            required
            value={email}
          /> */}
          <TextField
            id="filled-helperText"
            onChange={(e) => setEmail(e.target.value)}
            onFocus={clearErrorMessage}
            placeholder={'john.doe@example.com'}
            required
            variant="outlined"
            size="small"
            value={email}
          />
        </DataGroup>
        <DataGroup>
          <DataLabelGroup>
            <DataLabel>Contact Number</DataLabel>
            <ImportantSign>*</ImportantSign>
          </DataLabelGroup>
          {/* <DataInput
            onChange={(e) => setMobilePhone(e.target.value)}
            onFocus={clearErrorMessage}
            placeholder={'62'}
            required
            type="tel"
            value={mobilePhone}
          /> */}
          <TextField
            id="filled-helperText"
            onChange={(e) => setMobilePhone(e.target.value)}
            onFocus={clearErrorMessage}
            placeholder={'62'}
            required
            type="tel"
            variant="outlined"
            size="small"
            value={mobilePhone}
          />
        </DataGroup>
        <DataGroup>
          <DataLabelGroup>
            <DataLabel>PIN</DataLabel>
            <ImportantSign>*</ImportantSign>
          </DataLabelGroup>
          {/* <DataInput
            inputmode="numeric"
            maxlength="6"
            minlength="6"
            onChange={(e) => setPin(e.target.value)}
            onFocus={clearErrorMessage}
            placeholder={'XXXX'}
            required
            type="password"
            value={pin}
          /> */}
          <TextField
            id="filled-helperText"
            inputmode="numeric"
            inputProps={{ maxLength: 6 }}
            onChange={(e) => setPin(e.target.value)}
            onFocus={clearErrorMessage}
            placeholder={'XXXX'}
            required
            helperText="6 digits authentication PIN"
            type="password"
            variant="outlined"
            size="small"
            value={pin}
          />
        </DataGroup>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <SubmitButton onClick={handleSubmit}>Sign Up</SubmitButton>
        <p>Already have account? <Link href="/login"><span style={{ color: 'red' }}>Login</span></Link> </p>
      </Form>
    </Container>
  );
}

export default SignUpForm;
