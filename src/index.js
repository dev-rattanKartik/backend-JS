// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDb from "./db/index.js";

dotenv.config({
    path: './env'
})
const port = process.env.PORT || 4000;

connectDb()
.then((port) =>{
    app.on('error', (error) => {
        console.log("ERR: ", error);
        throw error;
    })
    app.listen(port, `Server is listening on the port ${port}`);
})
.catch((err) => {
    console.log("MONGO DB connection failed", err);
})