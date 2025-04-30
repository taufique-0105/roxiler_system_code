import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import productRoutes from './routes/stores.route.js'; //Importing the routes

dotenv.config();

const app = express();

app.use(express.json()); //Allow us to accept JSON data in the req.body

app.use('/api/stores', productRoutes); //Route for products

app.listen(5000, ()=> {
    connectDB();
    console.log('Server started at http://localhost:5000');
})