// require('dotenv').config({path: './env'})
import dotenv from 'dotenv'
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";
import app from './app.js';

dotenv.config({
    path: './env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port: ${process.env.PORT || 8000}`)
    })
})
.catch((error) => {
    console.log("MONGO DB connection failed !!!", error);
})







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