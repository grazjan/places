import express from "express";
import cors from 'cors';
import * as dotenv from 'dotenv';
import mongoose from "mongoose";
import placesRoutes from './routes/places.js';


//Dotenv
dotenv.config();

//init
const app = express();
app.use(cors());
app.use(express.json());


//Routes
app.use('/places', placesRoutes)


// MongoDB connection
const CONNECTION_URL = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.9tohf.mongodb.net/?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 8080;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`)))
    .catch((err) => console.log(err.message))