//
// last updated: 15/06/2021
// - replacing DataInput with materialUI TextField
// - changing link color
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
          {/* <DataInput
            onChange={handleChangeMobilePhone}
            onFocus={clearErrorMessage}
            placeholder={'62'}
            required
            type="tel"
            value={mobilePhone}
          /> */}
          <TextField
            id="filled-helperText"
            onChange={handleChangeMobilePhone}
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
            onChange={handleChangePin}
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
            onChange={handleChangePin}
            onFocus={clearErrorMessage}
            placeholder={'XXXXXX'}
            required
            helperText="6 digits authentication PIN"
            type="password"
            variant="outlined"
            size="small"
            value={pin}
          />
        </DataGroup>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <SubmitButton onClick={handleSubmit}>Sign In</SubmitButton>
        <p>Don't have an account? <Link href="/register"><span style={{ color: 'red' }}>Register</span></Link> </p>
        
      </Form>
    </Container>
  );
}

export default SignUpForm;
