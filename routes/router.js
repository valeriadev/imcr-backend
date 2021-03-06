const loginController = require("../controllers/login.controller");
const recordController = require("../controllers/record.controller");
const authMiddleware = require("../middleware/auth.middleware");

function defineRoutes(app) {
    app.get("/login", loginController.login);
    app.post("/record",authMiddleware.auth, recordController.record);
    app.get("/record",authMiddleware.auth, recordController.getRecord);
    app.post("/abbott",authMiddleware.auth, recordController.abbott);
}


module.exports= {defineRoutes};