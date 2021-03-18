const express = require('express');

//init app
const app = express();
const server = require('http').Server(app);
const io = require('socket.io');

app.set('view engine', 'ejs');
app.use(express.static('public'));

server.listen(8080);