const fs = require('fs'); // file system - fs module

// READING FILES

fs.readFile('./docs/celtics_roster.txt', (err, data) => {
    if(err) {
        console.log(err);
    }
    console.log(data.toString()); // toString() used to vconvert buffer to stream
});

console.log("This is first");

// easier way to show asynchronous runtime without callback function

// const { readFile } = require('fs');

// async function celticsRoster {
//     const file = await readFile('./docs/celtics_roster2.txt', 'utf8')
// }


// console.log("Celtics Roster:\n");

// WRITING FILES

// fs.writeFile('./docs/celtics_roster.txt', 'Jaylen Brown', () => {
//     console.log("File was written");
// });

// fs.writeFile('./docs/celtics_roster2.txt', 'Jayson Tatum', () => {
//     console.log("File was written");
// });

// DIRECTORIES

// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log("Folder Created");
//     })
// }
// else {
//     fs.rmdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log("Folder deleted!")
//     })
// }

// DELETING FILES

// if(fs.existsSync('./docs/deleteme.txt')){
//     fs.unlink('./docs/deleteme.txt', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log("File has been deleted.");
//     });
// }

// PRACTICE

//asking user for input using prompt sync

// const prompt = require('prompt-sync')();

// const yOn = prompt('Would you like to add or del a file?:   ')

// if(yOn == 'add'){
//     const addedFile = prompt('What file do you want to add?: '); // input from user through terminal
//     fs.writeFile(`./docs/${addedFile}`, `New File named: ${addedFile}`, () => {
//         console.log('New file was created');
//     });
// }
// else if(yOn == 'del'){
//     const deleteFile = prompt('What file do you want to delete?: ');
//     if(fs.existsSync(`./docs/${deleteFile}`)){
//        fs.unlink(`./docs/${deleteFile}`, (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log(`${deleteFile} has been deleted.`)
//        });
//     }
//     else{
//         console.log('File does not exists');
//     }
// }
