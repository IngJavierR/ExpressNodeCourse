var express = require('express');
var cors = require('cors')
var app = express();

app.use(cors());
app.use(express.static('dist'));

app.get('/', function(req, res){
    res.sendFile('dist/index.html');
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