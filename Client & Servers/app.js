// HANDLING BROWNSER REQUESTS & RESPONSES USING NODE.JS & EXPRESS

const express = require('express')

// create an express app 
const app = express();

// listening for requests
app.listen(3000)

// responding to requests

// sending index.html to browswer
app.get('/', (req,res) => {
    res.sendFile('./views/index.html', {root: __dirname});
});

// sending about.html to browser
app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname});
});

// redirecting about-us to about page
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// default response if none of the requested pages are valid | 404 error & setting the status code
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});