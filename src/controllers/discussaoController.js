const express = require('express');
const app = express();
const load = require('express-load');
load('src/models').into(app)

exports.discussao = (req, res) => {
    

    res.render('discussao');
};