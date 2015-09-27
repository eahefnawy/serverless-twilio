'use strict';

var Promise = require('bluebird'),
    twilio  = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

Promise.promisifyAll(twilio);

/**
 * Export for lambda handler
 * @param event
 * @param context
 * @param cb
 */
exports.run = function(event, context, cb) {

  if (!process.env.ACCOUNT_SID) {
    return cb(new Error('ACCOUNT_SID env var not set'));
  }

  if (!process.env.AUTH_TOKEN) {
    return cb(new Error('AUTH_TOKEN env var not set'));
  }

  if (!event.recipient) {
    return cb(new Error('Missing recipient number'));
  }

  if (!event.sender) {
    return cb(new Error('Missing sender number'));
  }

  var obj = {
    to: event.recipient, // Any number Twilio can deliver to. +16515556677
    from: event.sender, // A number you bought from Twilio and can use for outbound communication +14506667788
    body: event.body || '', // body of the SMS message
  };

  twilio.sendMessage(obj)
    .then(function(data) {
      return cb(null, data);
    })
    .catch(function(e) {
      return cb(e);
    });

};
