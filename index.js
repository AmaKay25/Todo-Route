import express from "express";
import router from './api/route/todoRoute.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


const app = express();
const db = process.env.DB_URL;

mongoose.connect(db,
    {useNewUrlParser:true,useUnifiedTopology:true})
    .then(() => {console.log('database is running live')})
const port = 3000;

app.use(express.json())
app.use('/todos', router)


app.listen(port, () => {
    console.log (`listening at port ${port}`);
})


