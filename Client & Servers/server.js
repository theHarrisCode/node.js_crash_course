const http = require('http'); // http module
const fs = require('fs') // file system module

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    // checking what url the user visited | routing system
    let path = './views/'; 
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me': // redirecting /about-me to /about
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404; 
            break;
    }
     
    //sending html file browser
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        }
        else{
            // res.write(data); since were only sending one piece of data, we can do res.end(data) and get the same results
            res.end(data);
        }
    });

});

server.listen(3000, 'localhost', () => {
    console.log('Listening for request on port 3000');
});