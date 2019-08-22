const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();

const twilioFunctions = require('./sendSMS.js')

app.use(express.static(path.join(__dirname, '../dist')));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/', function(req, res){
  console.log('body', req.body)
  twilioFunctions.sendSMS(req.body);
  res.send();
})

app.listen(port, () => {
  console.log('listening on ' + port);
})