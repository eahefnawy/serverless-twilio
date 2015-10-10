# :iphone: awsm-twilio

In your JAWS project root directory, run:

```
npm install awsm-twilio
```

set the following env vars in your JAWS project: 

```
ACCOUNT_SID=XXX
AUTH_TOKEN=XXX
```
copy the following code to `/aws_modules/awsm-twilio/sms/event.json`:

```
{
  "to": "+16515556677",  // Any number Twilio can deliver to.
  "from": "+14506667788",     // A number you bought from Twilio and can use for outbound communication.
  "body": "Sharks are cool!"    // body of the SMS message
}
```
now, from inside that `/awsm-twilio/sms/` directory...

```
jaws run
```

Tadaa! it works! ;)
