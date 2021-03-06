const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const server = require('http').createServer(app);
const port = 3000;
const flutest = require('./tests/flutest');
app.use(express.json());

server.listen(port, () => console.log('Server running on port:' + port));

app.post('/flutest', flutest.basic);
