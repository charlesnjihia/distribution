'use strict';
const express=require("express");
const app=express();
const routes=require("./routes");
const jsonParser=require("body-parser").json;
const cors = require('cors');

app.use(cors());
app.use(jsonParser());

app.use("/",routes );


const port= 3001;
app.listen(port,()=>{
	console.log("express server listening ",port);
	
});