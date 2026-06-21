const express =  require("express");

const app= express();

app.get("/",(req,res) =>{
     res.send("Hotel Backend Running");
     console.log("HOTEL PROJECT RUNNING");
     

});
app.listen(5000,()=>{
    console.log("Server is Running");
    
})