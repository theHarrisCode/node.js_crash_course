// HANDLING BROWNSER REQUESTS & RESPONSES USING NODE.JS & EXPRESS

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blogs');

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

//sandbox routes

// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     });

//     blog.save()
//         .then((result) => {
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log("You have an error!\n", err);
//     });
// });

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// app.get('/single-blog', (req, res) => {
//     Blog.findById('65a564d3418b17249c412673')
//     .then((result) => {
//         res.send(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// });

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

app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 }) // sorts blog from newest to oldest
    .then((result) => {
        res.render('index', {title: 'All Blogs', blogs: result})
    })
    .catch((err) => {
        console.log(err);
    })
})

app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
        .then((result) => {
            console.log("Blog Saved");
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err);
        });
});


app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create a new Blog'});
})
// redirecting about-us to about page
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });

// default response if none of the requested pages are valid | 404 error & setting the status code
app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
});