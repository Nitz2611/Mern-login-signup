import express from 'express'

import cors from 'cors'

import dotenv from 'dotenv'
import connectDB from './config/db.js';
import authRoutes from './Routes/authRoutes.js'

dotenv.config();

const app = express()
app.use(express.json())
app.use(cors())


//getting connected with mongodb
connectDB();

//routes
app.use('/api', authRoutes);

//starting server
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server is running ${PORT} `)
})