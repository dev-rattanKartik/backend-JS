// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDb from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './env'
})
const port = process.env.PORT || 4000;

connectDb()
.then(() =>{
    app.on('error', (error) => {
        console.log("ERR: ", error);
        throw error;
    })
    app.listen(port, () => {
        console.log(`Server is listening on the port ${port}`);
    });
})
.catch((err) => {
    console.log("MONGO DB connection failed", err);
})