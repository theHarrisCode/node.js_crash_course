const people = ["sora", "riku", "kairi", "roxas", "namine"];
const ages = [10, 23, 94, 55, 32];
let no = "I am no. 1";

console.log(people);
console.log(ages);


// exporting variable when called outside of this file
module.exports = {
    people, ages, no
};