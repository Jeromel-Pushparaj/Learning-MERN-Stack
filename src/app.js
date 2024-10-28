const express = require('express')

const app = express();

app.get('/', function(req, res) { res.send('hello there');});

app.post('/books' , function(req, res){
    req.body('name');
    
    res.send('books ')}
)

app.listen(700)



