const crypto = require('crypto');
const moment = require('moment-timezone');

module.exports = (accessKeyId, secretAccessKey, associateTag) => (operation, options) => {
  let url = 'http://webservices.amazon.com/onca/xml';
  let parameters = [
    `AWSAccessKeyId=${accessKeyId}`,
    `AssociateTag=${associateTag}`,
    'Service=AWSECommerceService',
    'Operation=ItemLookup',
    `Timestamp=${encodeURIComponent(moment().tz("America/Los_Angeles").format('YYYY-MM-DDThh:mm:ssZ'))}`,
    'Version=2013-08-01'
  ];

  Object.keys(options).forEach((option) => {
    parameters.push(`${option}=${encodeURIComponent(options[option])}`);
  });

  const toSign = 'GET\n' +
    'webservices.amazon.com\n' +
    '/onca/xml\n' +
    parameters.sort().join('&');

  const signature = crypto.createHmac("sha256", secretAccessKey).update(toSign).digest("base64");
  url += `?${parameters.join('&')}&Signature=${signature}`;

  return url;
}
