function allowAll(req, res, next){
    res.setHeader("Access-Control-Allow-Origin", req.get('origin'));
    res.setHeader("Access-Control-Allow-Headers","*");

    next();
}

module.exports=allowAll;