const config = {
  // Backend config

  //Stripe Publishable Key
  STRIPE_KEY:
    "pk_test_51MM6guDvZfghXI96bUWRmsVa7ganYjvCIrzSKT5TiaENdIOS49jqfEEGLJD0hGc76vVCnzbRbWf9TkN0c77lt7Gp00DT6hT8e3",

  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: process.env.REACT_APP_REGION,
    BUCKET: process.env.REACT_APP_BUCKET,
  },
  apiGateway: {
    REGION: process.env.REACT_APP_REGION,
    URL: process.env.REACT_APP_API_URL,
  },
  cognito: {
    REGION: process.env.REACT_APP_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
  },
};

export default config;
