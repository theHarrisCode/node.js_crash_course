const importMod = require('./people');

// console.log("These are the people require" + require('./people'));
console.log(`These are the ages ${importMod.ages}`);

const {ages, no, people} = require('./people');
console.log(ages, no);

const os = require('os');
console.log("Platform: " + os.platform(), "Home Directory: " + 
os.homedir());