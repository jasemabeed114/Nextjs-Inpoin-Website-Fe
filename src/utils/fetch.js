import axios from 'axios';
import { encrypt } from './crypto';

axios.interceptors.request.use(function (config) {
  if(config.data && config.encrypt !== false) {
    config.data = encrypt(config.data);
    config.headers = {
      ...config.headers,
      'Content-Type': 'text/plain',
    };
  } 
  return config;
}, function (error) {
  return Promise.reject(error);
});

export default function fetch(options) {
  return new Promise((resolve, reject) => {
    axios(options)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        const defaultError = {
          code: 500,
          status: 'error',
          message: 'Failed to fetch data. Please contact developer.'
        };

        if (typeof err.response === 'undefined') reject(defaultError);
        else if (typeof err.response.data === 'undefined') reject(defaultError);
        else reject(err.response.data);
      });
  });
}
