import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";

const sendEmail=async function (email_id,subject,message){
    let result=1;
    let mailer=nodemailer.createTransport(smtpTransport({
        service:"gmail",
        auth:{
            user:"heyitspkj@gmail.com",
            pass:"gqld npnw tffd jzfl"
        }
    }));
    const {error, response}=await mailer.sendMail({
        from:"heyitspkj@gmail.com",
        to:email_id,
        subject:subject,
        html:message
    })

    if (error) {
        console.log({error});
        result=0;
        
    } else {
        console.log({response});
    }
    mailer.close();

    return result;
}

export default sendEmail;