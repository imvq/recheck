export const LINKEDIN_REDIRECT_URL = `https://www.linkedin.com/oauth/v2/\
authorization?response_type=code\
&client_id=${process.env.REACT_APP_LINKEDIN_APP_CLIENT_ID}\
&redirect_uri=${process.env.REACT_APP_AUTH_RETURN_HOSTNAME}\
&scope=r_liteprofile%20r_emailaddress`;
