// require('dotenv').config({path: './env'})
import dotenv from 'dotenv'
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


connectDB()







// FIRST APPROACH TO CONNECT DATABASE AND RUN THE APP
/*
import express from 'express'
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("error:", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is running is port: ${process.env.PORT}`)
        })
    }
    catch (error) {
        console.error("error: ", error)
    }
})()
*/