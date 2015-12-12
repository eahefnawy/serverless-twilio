# :iphone: serverless-twilio

In your Serverless project root directory, run:

```
sls module install https://github.com/eahefnawy/serverless-twilio
```

### Local Testing
add the following env vars in your `/back/.env` file:

```
ACCOUNT_SID=XXX
AUTH_TOKEN=XXX
```
copy the following code (provide your own numbers) to `/back/modules/serverless-twilio/send/event.json`:

```
{
  "send": {
    "to": "+1234567890”,
    "from": "+1234567890”,
    "body": "Serverless Apps are cool!"
  }
}
```
run the following for local testing and select the function:

```
sls function run
```

Tadaa! it works! ;)

### Deploying

set the the env vars:

```
sls env set -k ACCOUNT_SID -v XXX
sls env set -k AUTH_TOKEN -v XXX
```

select & deploy the function:

```
sls function deploy
```

select & deploy the endpoint:

```
sls endpoint deploy
```

Now it's deployed! Just make a POST request with the above event data to the provided endpoint to try it out.

Have fun!
