import fetch from '../utils/fetch';
import { accessTokenStorage, userTokenStorage, userIdentifierStorage } from '../utils/storage';
import { SERVICES } from '../configs';
import { getProfile } from './profile';

export async function login(data) {
  const options = {
    url: SERVICES.LOGIN,
    method: 'POST',
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

export async function verifyNewDevice(data) {
  const options = {
    url: SERVICES.LOGIN,
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