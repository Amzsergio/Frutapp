const express = require('express');
const morgan = require('morgan');
const {Op, db, user } = require('./setup/database.js');

const server = express();

server.use(express.json());
server.use(morgan('dev'));

server.post('/users', async (req, res) => {
    const {name, email, password, phone, address, type_document, number_document} = req.body;
    try {
        const newUser = await user.create({
            name,
            email,
            password,
            phone,
            address,
            type_document,
            number_document
        });
        res.status(200).json(newUser)
    } catch (error) {
        res.status(400).send(`Error:${error}`)
    }
})

server.listen(3001, ()=>{
    console.log("Server running on port 3001");
    db.sync({force: true});
})