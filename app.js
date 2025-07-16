import express from "express";
import dotenv from "dotenv";
import cors from 'cors'

// Importing mongodb
import mongoDb from "./src/config/mongodb.config.js";

// importing routes
import routes from './src/routes/urlroutes.js' 

dotenv.config()

const app = express();

app.use(cors())

app.use(express.json())

// Routes
app.use(routes)

app.listen(process.env.PORT,()=>{
    mongoDb()
    console.log(`Server is runnning on http://localhost:${process.env.PORT}`);
})
