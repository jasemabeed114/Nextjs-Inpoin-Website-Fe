const REQUEST_DEMO_URL = process.env.REQUEST_DEMO_URL;
const SERVICE_URL = process.env.SERVICE_URL;

const services = {
  REQUEST_DEMO_URL,
  APP_LOGIN: `${SERVICE_URL}/v1/auth`,
  LOGIN: `${SERVICE_URL}/v1/user/login`,
  PROFILE: `${SERVICE_URL}/v1/user`,
  REGISTER: `${SERVICE_URL}/v1/user/register`,
  VERIFY_REGISTRATION: `${SERVICE_URL}/v1/user/otp`,
  RUN_ACTIVITY: `${SERVICE_URL}/v1/activities`,
  RUN_GAME: `${SERVICE_URL}/v1/games`,
};

export default services;