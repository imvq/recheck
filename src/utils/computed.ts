import * as constants from './constants';

export const LINKEDIN_PROFILE_REDIRECT_URL = `https://www.linkedin.com/oauth/v2/authorization?response_type=code\
&client_id=${process.env.REACT_APP_LINKEDIN_APP_CLIENT_ID}\
&redirect_uri=${process.env.REACT_APP_AUTH_RETURN_HOSTNAME}\
/${constants.PROFILE_SUBPATH}\
&scope=r_liteprofile%20r_emailaddress`;

export const LINKEDIN_REVIEW_REDIRECT_URL = `https://www.linkedin.com/oauth/v2/authorization?response_type=code\
&client_id=${process.env.REACT_APP_LINKEDIN_APP_CLIENT_ID}\
&redirect_uri=${process.env.REACT_APP_AUTH_RETURN_HOSTNAME}\
/${constants.REVIEW_SUBPATH}\
&scope=r_liteprofile%20r_emailaddress`;
