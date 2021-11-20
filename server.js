const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());


//Connect to mongoose

mongoose.connect("mongodb+srv://duzie:gVHDO4qNxC0Rw26a@cluster0.9w9q1.mongodb.net/theyrouxCouncil?retryWrites=true&w=majority", {useNewUrlParser: true});
//Require route
app.use("/route", require("./route/noteRoute"));

app.listen(3001, ()=>{
    console.log("LISTENING TO PORT 3001");
});