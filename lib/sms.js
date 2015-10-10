'use strict';

var Promise = require('bluebird');


exports.send = function(event) {
  if (!process.env.ACCOUNT_SID) {
    throw new Error('ACCOUNT_SID env var not set');
  }

  if (!process.env.AUTH_TOKEN) {
    throw new Error('AUTH_TOKEN env var not set');
  }

  if (!event.to) {
    throw new Error('Missing to/recipient number');
  }

  if (!event.from) {
    throw new Error('Missing from/sender number');
  }

  var twilio  = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);
  Promise.promisifyAll(twilio);

  return twilio.sendMessageAsync(event);
};
