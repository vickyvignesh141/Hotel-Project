const express =  require("express");
const foods=require("./data/food")
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/hotelDB")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });
  
const app= express();
const bookings = [];

app.use(express.json());

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

app.post("/booking", (req, res) => {
    console.log(req.body);      // Current request
    bookings.push(req.body);    // Save
    console.log(bookings);      // All saved data

    res.send("Booking Created");
});

app.get("/booking",(req,res)=>{
    console.log(bookings);
    res.send(bookings);
    
})


app.listen(5000,()=>{
    console.log("Server is Running");
    
})