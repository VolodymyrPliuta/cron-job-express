const express = require('express')
const port = 8999
var cron = require('node-cron');

const app = express();

// add cron job
cron.schedule('* * * * *', () => {
  app.get('/', (req, res) => res.json('Mike cron with node is working!!!'));
});

app.get('/', (req,res) => res.json('You are the world'))

//console.log("We are here to win")
app.get('/ds', (req,res) => res.json({'where': 'You are here'}))

app.post('/f', (req,res) => res.json('You are the best'))

app.listen(port)

