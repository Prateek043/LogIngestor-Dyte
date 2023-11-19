const express = require("express");
const bodyParser = require("body-parser");
const dotenv=require('dotenv')
const cors = require('cors');
const mongoose = require("mongoose");
const Connect=require('./config/connection')
const Log = require("./models/Logschema");

const app = express();

dotenv.config();

Connect();

app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 4000;



app.post('/logs', async (req, res) => {
    const data=req.body;
    let log = new Log(data);
    
    const doc = await log.save();
    res.json(doc);
})
app.post('/search', async (req, res) => {
    let query = {};

    if (req.body.level) {
        query.level = req.body.level;
    }
    if (req.body.message) {
        query.message = req.body.message;
    }
    if (req.body.resourceId) {
        query.resourceId = req.body.resourceId;
    }
    if (req.body.traceId) {
        query.traceId = req.body.traceId;
    }
    if (req.body.spanId) {
        query.spanId = req.body.spanId;
    }
    if (req.body.commit) {
        query.commit = req.body.commit;
    }
    if (req.body.parentResourceId) {
        query['metadata.parentResourceId'] = req.body.parentResourceId;
    }
    const getlogs = await Log.find(query);
    res.json(getlogs);
})



app.listen(port,()=>{
    console.log(`Server is listining at ${port}`);
});



