const express = require('express');
const morgan = require('morgan');
const {Op, db, user } = require('./setup/database.js');

const server = express();

server.use(express.json());
server.use(morgan('dev'));

// server.post('/users', async (req, res) => {
//     const {}
// })
