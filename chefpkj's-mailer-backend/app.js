import Express from "express";
import router from "./Routes/index.js";
import cors from "cors"




const app=Express();
app.use(cors());
app.use(Express.json());
app.use(router);


app.get("/status",(req,res)=>{
    return res.status(200).json({status:200,response:"Server is up and running!!"});
})

export default app;