const express = require('express');
const app = express();
const load = require('express-load');
load('src/models').into(app)

exports.novaReview = (req, res) => {
    res.render('novaReview');
};