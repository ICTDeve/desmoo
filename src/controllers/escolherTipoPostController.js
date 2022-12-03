const express = require('express');
const app = express();
const load = require('express-load');
load('src/models').into(app)

exports.escolherTipoPost = (req, res) => {
    res.render('escolherTipoPost');
};