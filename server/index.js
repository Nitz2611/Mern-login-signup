import express from 'express'
import mongoose from "mongoose";
import cors from 'cors'
import EmployeeModel from './models/Employee.js'
// import dotenv from 'dotenv'

// dotenv.config();

const app = express()
app.use(express.json())
app.use(cors())


//getting connected with mongodb
const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://sharmanitish183:db123@cluster0.grgtlks.mongodb.net/loginSignup")
        console.log(`Connected to Mongodb Database`);
    } catch (error) {
        console.log(`Error in Mongdb ${error}`);
    }
};

connectDB();

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                //authenticate password with correct email
                if (user.password === password) {
                    res.json("Success")
                }
                else {
                    res.json("The password is incorrect")
                }
            }
            else {
                res.json("No record existed")
            }
        })
})

//post method will send data to database and save it
app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.json(err))
})

//starting server
app.listen(3001, () => {
    console.log("Server is running..")
})