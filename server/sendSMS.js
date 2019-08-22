const auth = require('./twilio_keys.json')
const authToken = auth.authToken
const accountSid = auth.accountSid
const client = require('twilio')(accountSid, authToken);


module.exports.sendSMS = (msg) => {
    client.messages
      .create({
        body: msg.body,
        from: '+16196482851',
        to: msg.to //'+19254465702'
      })
      .then(message => console.log(message.sid))
      .catch(err => console.log(err));
}