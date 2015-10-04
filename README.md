# :iphone: awsm-twilio

In your JAWS project root directory, run:

```
jaws module install https://github.com/eahefnawy/awsm-twilio
```

set the following env vars in your JAWS project: 

```
ACCOUNT_SID=XXX
AUTH_TOKEN=XXX
```
You can test the lambda by sending a JSON similar to...

```javascript
{
  "recipient": "+16515556677",  // Any number Twilio can deliver to.
  "sender": "+14506667788",     // A number you bought from Twilio and can use for outbound communication.
  "body": "sharks are cool!"    // body of the SMS message
}
```
