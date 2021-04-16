import fetch from '../utils/fetch';
import { accessTokenStorage, profileFullNameStorage, userTokenStorage } from '../utils/storage';
import { SERVICES } from '../configs';

export async function getProfile() {
  const options = {
    url: SERVICES.PROFILE,
    method: 'GET',
    headers: {
      'access-token': accessTokenStorage.get(),
      'user-token': userTokenStorage.get(),
    }
  };
  try {
    const response = await fetch(options);
    profileFullNameStorage.set(response.data.fullName);
    return response;
  } catch(error) {
    return Promise.reject(error);
  }

}