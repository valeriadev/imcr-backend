const express = require("express");
const app = express();
const router = require("./routes/router");
const googleApi = require("./services/googleApi");
const allowAll = require('./middleware/accessControl.middleware');
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(allowAll);

app.listen(8080, (err) => {
    if (err) {
        console.error("server can't listen to port 8080", err);
        throw err;
    } else {
        console.log("server is alive");
    }
});

router.defineRoutes(app);
// googleApi.listMajors();
