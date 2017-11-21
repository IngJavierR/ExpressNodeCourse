var express = require('express');
var cors = require('cors')
var app = express();

app.use(cors());

app.get('/', function(req, res){
    res.status(200).send('HelloWorld');
});

app.get('/games', function(req, res){

    var games = [
        {
            name: 'Halo',
            platform: 'Xbox'
        },
        {
            name: 'Mario Galaxy',
            platform: 'Nintendo'
        },
        {
            name: 'Grand Theft Auto',
            platform: 'Xbox, PlayStation, PC'
        }
    ]
    res.status(200).send(games);
});

app.listen(8080, function () {
    console.log('Listening on port 8080');
});