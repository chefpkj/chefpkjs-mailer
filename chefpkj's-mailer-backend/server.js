import app from "./app.js";
import "dotenv/config";
import cors from "cors";

app.use(cors());

const port=process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`Server is up on port: ${port}`)
});