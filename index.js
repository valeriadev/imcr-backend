const express = require("express");
const app = express();
const router = require("./routes/router");
const cors = require("cors");
const allowAll = require('./middleware/accessControl.middleware');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')



app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("P3P", 'CP=\"ALL IND DSP COR ADM CONo CUR CUSo IVAo IVDo PSA PSD TAI TELo OUR SAMo CNT COM INT NAV ONL PHY PRE PUR UNI\"');
    next();
})
app.use(cors({ credentials: true, allowedHeaders:'*', origin:['http://localhost:3000','http://imcr.info']}));
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
// app.use(allowAll);

// app.use(express.static('build'))




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
