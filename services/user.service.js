const users = require("../data/users.json");

function validateUser(username, password) {
    for (let i = 0; i < users.length; i++) {
        if (username === users[i].username && password === users[i].password) {
            return { token: users[i].token, type: users[i].type };
        }
    }
}


function checkToken(token) {
    for (let i = 0; i < users.length; i++) {
        if (token === users[i].token) {
            return true;
        }
    }
}

module.exports = { validateUser, checkToken };