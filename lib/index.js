/**
 * Lib
 */

var Promise = require('bluebird');

module.exports.respond = function(event, cb) {

  if (!process.env.ACCOUNT_SID) return cb("ACCOUNT_SID env var not set");

  if (!process.env.AUTH_TOKEN) return cb("AUTH_TOKEN env var not set");

  if (!event.to) return cb("Missing to/recipient number");

  if (!event.from) return cb("Missing from/sender number");


  var twilio  = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

  Promise.promisifyAll(twilio);

  twilio.sendMessageAsync(event)
    .then(function(data) {
      return cb(null, data);
    })
    .catch(function(e) {
      return cb(e);
    });
};