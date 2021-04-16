import fetch from '../utils/fetch';
import { userTokenStorage, accessTokenStorage } from '../utils/storage';
import { SERVICES } from '../configs';

export async function runActivity(data) {
  const options = {
    url: SERVICES.RUN_ACTIVITY,
    method: 'POST',
    headers: {
      'user-token': userTokenStorage.get(),
      'access-token': accessTokenStorage.get(),
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


export async function runGame(data) {
  const options = {
    url: SERVICES.RUN_GAME,
    method: 'GET',
    headers: {
      'user-token': userTokenStorage.get(),
      'access-token': accessTokenStorage.get(),
    },
  };
  try {
    const activityResponse = await runActivity(data);
    const response = await fetch(options);

    return {
      ...response,
      data: { ...response.data, ...activityResponse.data }
    };
  } catch(error) {
    return Promise.reject(error);
  }

}