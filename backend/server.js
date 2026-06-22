const express =  require("express");
const foods=require("./data/food")

const app= express();

app.get("/",(req,res) =>{
     res.send("Hotel Backend Running");
     console.log("HOTEL PROJECT RUNNING");
     

});

app.get("/foods",(req,res)=>{
    //res.send("Menu page is Working");
    res.send(foods);
})

app.get("/foods/:id",(req,res)=>{
    const dishname = foods.find(item => item.id == req.params.id);
    res.send(dishname);
})


app.listen(5000,()=>{
    console.log("Server is Running");
    
})