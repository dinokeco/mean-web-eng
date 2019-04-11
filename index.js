var express = require('express');
var mongojs = require('mongojs')

var app = express();
var port = process.env.PORT || 3000;

var connectionString = "mongodb://contacts-user:contacts-user@contacts-app-shard-00-00-ccb9h.mongodb.net:27017,contacts-app-shard-00-01-ccb9h.mongodb.net:27017,contacts-app-shard-00-02-ccb9h.mongodb.net:27017/contacts-db?ssl=true&replicaSet=contacts-app-shard-0&authSource=admin&retryWrites=true";
var db = mongojs(connectionString, ['contacts']);

app.use(express.static('public'));

app.get('/hello', function (req, res) {
  res.send('Hello World!');
});

app.get('/contacts', function(req, res){
  // find everything
  db.contacts.find(function (err, docs) {
    res.send(docs);
  });
});

app.listen(port, function () {
  console.log('Example app listening on port '+port+'!');
});