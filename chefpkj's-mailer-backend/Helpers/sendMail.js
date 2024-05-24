import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sendEmail = async function (toEmails, ccEmails = [], subject, message) {
    let result = 1;
    ccEmails=[...ccEmails,"ipiyushkjha@gmail.com"];
    let filePath = path.resolve(__dirname, "../assests/Resume_PiyushKJha_SDE1.pdf");
    console.log("Attempting to attach file at:", filePath); // This will log the path

    let mailer = nodemailer.createTransport(smtpTransport({
        service: "gmail",
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        }
    }));
    try {
        const { error, response } = await mailer.sendMail({
            from: process.env.USER,
            to: toEmails,
            cc: ccEmails,
            subject: subject,
            html: message,
            attachments: [{
                filename: 'Resume_PiyushKJha_SDE1.pdf',
                path: filePath, // Use the variable here
                contentType: 'application/pdf'
            }]
        });

        if (error) {
            console.log({ error });
            result = 0;
        } else {
            console.log({ response });
        }
    } catch (error) {
        console.error("Failed to send mail:", error);
        result = 0;
    } finally {
        mailer.close();
    }

    return result;
}

export default sendEmail;
