// HANDLING BROWNSER REQUESTS & RESPONSES USING NODE.JS & EXPRESS

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')
const methodOverride = require('method-override');


// create an express app 
const app = express();

// connect to mongoDB 
const username = 'theharriscode401'
const password = '14Mar3014Oct3?!'
const encodedPassword = encodeURIComponent(password);
const dbURI = `mongodb+srv://${username}:${encodedPassword}@cluster0.swgfzzo.mongodb.net/cluster0?retryWrites=true&w=majority`
mongoose.connect(dbURI)
    .then((result) => app.listen(3000), 
        console.log("Listening on port 3000"))
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');


//middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // middleware used to retrieve the object blog || req.body
app.use(morgan('dev'));
app.use(methodOverride('_method'));

// responding to requests

// sending index.html to browswer
app.get('/', (req,res) => {
      res.redirect('/blogs')
});

// sending about.html to browser
app.get('/about', (req, res) => {
    // res.sendFile('./views/about.html', { root: __dirname});
    res.render('about', {title: 'About'});
});

// blog routes 
app.use('/blogs', blogRoutes);

// default response if none of the requested pages are valid | 404 error & setting the status code
app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
});