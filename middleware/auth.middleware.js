const userService = require("../services/user.service");


function auth(req,res,next) {
    console.log('in auth middleware')
    const imcrToken = req.query.token;

    if(imcrToken && userService.checkToken(imcrToken)) {
        next();
    } else {
        res.sendStatus(401);
    }
}

module.exports = {auth}