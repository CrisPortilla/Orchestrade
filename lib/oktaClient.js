const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://dev-546699.oktapreview.com',
  token: '00EWB1nvyUVoXg3-psSNWTNjltJdeRDyNUeDrOMpF7'
});

module.exports = client;