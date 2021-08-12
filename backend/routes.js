'use strict';
var express=require("express");
var router=express.Router();
var JsonDB=require('node-json-db').JsonDB;
var Config =require('node-json-db/dist/lib/JsonDBConfig').Config;
var randomString=require("./generaterandom");
var db = new JsonDB(new Config("shop", true, false, '/'));


//fetch all products route
router.get("/products",(req,res)=>{
	try{
		let products=db.getData("/products");
		let response={
			status:200,
			products:products	
		}

	res.json(response);
	}catch(e){
	
		let response={
			status:404,
			message:"Could not fetch  products.Error occured"	
		}
		res.json(response);
		
	}


	
	
	
});


//addproduct route
router.post("/addproduct",(req,res)=>{

let product=req.body;
product.id=randomString();

try{
	
    
	db.push("/products[]",product);
	let response={
			status:200,
			message:"product saved",
			product:product	
		}
	res.json(response);
	}catch(e){
		
		let response={
			status:500,
			message:"An error occured.try again1"
			
		}
		
		res.json(response);
		
		
	}
	
	
});



//addschedule route
router.post("/addschedule",(req,res)=>{

let schedule=req.body;
schedule.id=randomString();
try{
	db.push("/schedules[]",schedule);
	let response={
			status:200,
			message:"schedule saved",
			schedule:schedule	
		}
	res.json(response);
	}catch(e){
		
		let response={
			status:500,
			message:"An error occured.try again1"
			
		}
		
		res.json(response);
		
		
	}	
	
});

//fetch all schedules route
router.get("/schedules",(req,res)=>{
	try{
		let schedules=db.getData("/schedules");
		let response={
			status:200,
			schedules:schedules
		}
		

	res.json(response);
	}catch(e){
	
		let response={
			status:404,
			message:"Could not fetch  schedules.Error occured"	
		}
		res.json(response);
		
	}


	
	
	
});

//add products to schedule route
router.post("/addproductstoschedule",(req,res)=>{

let schedule=req.body;
let scheduleid=schedule.id;
let products=schedule.products;

try{
	//get the shedule index by shedule id and append the products array 
	
	
	db.push("/schedules[" + db.getIndex("/schedules", scheduleid) + "]/products",products);
	
	let response={
			status:200,
			message:"products added to schedule",
			scheduleid:scheduleid	
		}
	res.json(response);
	}catch(e){
		
		let response={
			status:500,
			message:"An error occured.try again1"
			
		}
		
		res.json(response);
		
		
	}	
	
});




module.exports=router;