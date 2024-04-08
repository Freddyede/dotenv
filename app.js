require('dotenv').config();
function me() {
    return `I am ${process.env.MY_NAME}, wilder in ${process.env.MY_CITY}, and I love ${process.env.MY_LANGUAGE}`
}

console.log(me());