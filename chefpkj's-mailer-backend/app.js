import Express from "express";
import router from "./Routes/index.js";


const app=Express();
app.use(router);


app.get("/status",(req,res)=>{
    return res.status(200).json({status:200,message:"Server is up and running!!"});
})

export default app;