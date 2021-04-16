import nookies from 'nookies';
import { encrypt, decrypt } from '../utils/crypto';

export function createCookieStorage(_name, options = {}) {
  return {
    _name,
    set(value, { ctx = null , ...cookieOptions } = {}) {
      nookies.set(
        ctx, 
        this._name,
        options.encrypt ? encrypt(value) : value, 
        { path: '/', ...cookieOptions }
      );
    },
    get(ctx) {
      const cookie = nookies.get(ctx)[this._name];
      return options.encrypt ? decrypt(cookie) : cookie;
    },
    remove(ctx) {
      nookies.destroy(ctx, this._name);
    }
  };
}

export function createLocalStorage(_name) {
  return {
    _name,
    set(value) {
      localStorage.setItem(this._name, JSON.stringify(value));
    },
    get() {
      return JSON.parse(localStorage.getItem(this._name));
    },
    remove() {
      localStorage.removeItem(this._name);
    }
  };
}

export const accessTokenStorage = createCookieStorage('at', { encrypt: true });
export const userTokenStorage = createCookieStorage('ut', { encrypt: true });
export const profileFullNameStorage = createCookieStorage('fn');
export const userIdentifierStorage = createLocalStorage('ui');
