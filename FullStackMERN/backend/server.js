import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import storesRoutes from './routes/stores.route.js'; //Importing the routes

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json()); //Allow us to accept JSON data in the req.body

app.use('/api/stores', storesRoutes); //Route for products

app.listen(5000, ()=> {
    connectDB();
    console.log(`Server started at http://localhost:${port}`);
})