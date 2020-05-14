const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(__dirname + '/client'))
// /Users/bryanevangelista/Documents/projects/canton site/canton/client
app.listen(port, console.log(`${port} is listening`))