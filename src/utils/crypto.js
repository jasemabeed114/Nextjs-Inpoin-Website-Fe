import Crypto from 'crypto-js';

const q = 'QVhmdaruPuRHx9lmJpFtftzVM1FRaqFda48S5sY2';

export const encrypt = (value) => {
  if(!value) return '';
  let valueStringified;
  if(typeof value === 'object') valueStringified = JSON.stringify(value);
  else valueStringified = value.toString();
  return Crypto.AES.encrypt(
    valueStringified, 
    q,
    { padding: Crypto.pad.Pkcs7, mode: Crypto.mode.CBC }
  ).toString();
};

export const decrypt = (value) => {
  if(!value) return '';
  const decrypted = Crypto.AES.decrypt(value, q).toString(Crypto.enc.Utf8);
  return decrypted;
};
