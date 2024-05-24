import Express, { json } from "express";
import sendEmail from "../Helpers/sendMail.js";


const app=Express.Router();




app.post("/sendMail",async(req,res)=>{
    const result=await sendEmail(req?.body?.toEmails,req?.body?.ccEmails,req?.body?.subject,req?.body?.message);
    console.log(result);
    return res.status(200).json({status:200,response:"Sending mail and more..."});
})

export default app;