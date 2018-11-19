const users = require("../data/users.json");

function validateUser(username, password) {
    for (let i = 0; i < users.length; i++) {
        if (username === users[i].username && password === users[i].password) {
            return {token: users[i].token, type: users[i].type};
        }
    }
}

module.exports={validateUser};