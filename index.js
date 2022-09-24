// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/:date", function (req, res) {
  
  // if date is number multiply it by 1000 so that the argument is in milliseconds, not seconds.
  let date = (req.params.date.includes('-')) ?
   new Date(req.params.date) 
   : new Date(req.params.date * 1000) 

  if (date == 'Invalid Date') {
    res.json({ error: 'Invalid Date' })
  }
  else {
    res.json({
      unix: date.valueOf(),
      utc: date.toUTCString()
    })
  }
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
