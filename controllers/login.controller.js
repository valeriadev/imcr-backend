const userService = require("../services/user.service");

function login(req, res) {

    //let username =req.query.username;
    //let password=req.query.password;

    let {username, password} = req.query;
    let validatedUser = userService.validateUser(username, password);
    if (validatedUser) {
        res.status(200).json(validatedUser);
    } else {
        res.sendStatus(401);
    }
}
module.exports = {login};