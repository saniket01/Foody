const http = require('http');
const express = require('express');
const fs = require('fs');
const port = process.env.PORT || 3000;
const app = express();

app.use('/css', express.static('css'));
app.use('/images', express.static('images'));

app.get('/', function(req, res) {
    const data = fs.readFileSync('index.html');
    res.end(data);
})

app.get('/about', function(req, res) {
    const data = fs.readFileSync('about.html');
    res.end(data);
})
app.get('/contact', function(req, res) {
    const data = fs.readFileSync('contact.html');
    res.end(data);
})
app.get('/services', function(req, res) {
    const data = fs.readFileSync('services.html');
    res.end(data);
})
app.get('/signin', function(req, res) {
    const data = fs.readFileSync('signin.html');
    res.end(data);
})
app.get('/signup', function(req, res) {
    const data = fs.readFileSync('signup.html');
    res.end(data);
})
app.listen(3000);