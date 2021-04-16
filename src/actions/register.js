import fetch from '../utils/fetch';
import { accessTokenStorage, userIdentifierStorage, userTokenStorage } from '../utils/storage';
import { SERVICES } from '../configs';
import { getProfile } from './profile';

export async function getAccessToken() {
  const options = {
    url: SERVICES.APP_LOGIN,
    method: 'POST',
    auth: {
      username: 'uNiU6SsXmHSsD_Ouk8PWQ6JJln56ngB-',
      password: 'NQYpaZ8xsIbS1nodlUjgSHmg0HA/nrWP'
    }
  };
  try {
    const response = await fetch(options);
    accessTokenStorage.set(response.data.token);
    return response;
  } catch(error) {
    return Promise.reject(error);
  }

}


export async function register(data) {
  const options = {
    url: SERVICES.REGISTER,
    method: 'POST',
    headers: {
      'access-token': accessTokenStorage.get()
    },
    data
  };
  try {
    const response = await fetch(options);

    return response;
  } catch(error) {
    return Promise.reject(error);
  }

}


export async function verifyRegistration(data) {
  const options = {
    url: SERVICES.VERIFY_REGISTRATION,
    method: 'PATCH',
    headers: {
      'access-token': accessTokenStorage.get(),
      imei: userIdentifierStorage.get(),
      platform: 'android',
    },
    data
  };
  try {
    const response = await fetch(options);
    userTokenStorage.set(response.data.token);
    await getProfile();
    return response;
  } catch(error) {
    return Promise.reject(error);
  }

}