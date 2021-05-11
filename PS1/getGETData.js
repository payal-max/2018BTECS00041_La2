var express = require('express')
var app = express()
var port = '3000'
var hostname = '127.0.0.1'

app.use(express.static('public'));
  
app.get('/AadharForm.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "AadharForm.html" );  
})


app.get('/process_get', function (req, res) {  
res.send('<p>Full Name: ' + req.query['full_name']+'</p><p>Birthdate: '+req.query['Birthdate']
  +'</p><p>City: ' + req.query['City']+'</p><p>Pincode: '+req.query['Pincode']+'</p>');
})

	var server = app.listen(3000, function () {
  	var host = server.address().address;
  	var port = server.address().port;
  	console.log(`Example app listening at http://${hostname}:${port}/AadharForm.html`)
})  