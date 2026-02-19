import express from  "express";


const app = express();

app.get("/",(req,res)=>{
    req.send("GitOps Clean Project Running 🚀");
})

app.listen(3000,()=>{
    console.log("app is listening on port 3000")
})

