import Express from "express";

const app=Express.Router();

app.get("sendMail",(req,res)=>{
    return res.status(200).json({status:200,response:"This is sending mail.."});
})

export default app;