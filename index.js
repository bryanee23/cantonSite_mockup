const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const port = 3000;
const server = express();

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(express.static(path.join(__dirname + '/client/dist')));

server.listen(port, () => console.log(`I'll listen to you all day on ${port}`))
