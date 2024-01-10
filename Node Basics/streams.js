// READING & WRITING A STREAM 

const fs = require('fs')

const readStream = fs.createReadStream('./docs/testText1.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/testText2.txt')

// readStream.on('data', (chunk) => { // .on is an event listener, a data event 
//     console.log('---- NEW CHUNK ----');
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk)
// });

readStream.pipe(writeStream);