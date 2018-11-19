const userService = require("../services/user.service");


function auth(req,res,next) {
    const imcrToken = req.cookies['imcr-token'];

    if(imcrToken && userService.checkToken(imcrToken)) {
        next();
    } else {
        res.sendStatus(401);
    }
}

module.exports = {auth}