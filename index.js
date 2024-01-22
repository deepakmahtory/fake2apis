require("dotenv").config();
const express = require('express');
const data=require("./api.json")
const cors=require('cors');


const app = express();

app.use(cors());

const port = process.env.PORT || 6500;

app.get("/api/fakeApi", (req, res) => {
    
    res.send(data)
    });


app.listen(port, () => {
    console.log("Running");
});
