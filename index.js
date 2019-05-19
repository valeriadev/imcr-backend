const express = require("express");
const app = express();
const router = require("./routes/router");
const cors = require("cors");
const allowAll = require('./middleware/accessControl.middleware');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')



app.use((req, res, next) => {
     // Website you wish to allow to connect
     res.setHeader('Access-Control-Allow-Origin', 'http://imcr.info');

     // Request methods you wish to allow
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
 
     // Request headers you wish to allow
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
 
     // Set to true if you need the website to include cookies in the requests sent
     // to the API (e.g. in case you use sessions)
     res.setHeader('Access-Control-Allow-Credentials', true);
    // res.header("Access-Control-Allow-Credentials", "true");
    // res.header("P3P", 'CP=\"ALL IND DSP COR ADM CONo CUR CUSo IVAo IVDo PSA PSD TAI TELo OUR SAMo CNT COM INT NAV ONL PHY PRE PUR UNI\"');
    next();
})
// app.use(cors({ credentials: true, allowedHeaders:['content-type','origin', "accept"], origin:['http://localhost:3000','http://imcr.info']}));
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
        console.log("server is alive - 8080");
    }
});

router.defineRoutes(app);


app.use(function(err,req,res,next){
    console.error(`error in error middlware ${err.message} ${err.stack}`)
    res.status(500).json({
        message:err.message,
        stack: err.stack
    });
})

// googleApi.listMajors();
