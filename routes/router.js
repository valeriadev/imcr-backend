const loginController = require("../controllers/login.controller");
const recordController = require("../controllers/record.controller");

function defineRoutes(app) {
    app.get("/login", loginController.login);
    app.post("/record",recordController.record);
}


module.exports= {defineRoutes};