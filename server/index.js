import express from 'express'

import cors from 'cors'
import EmployeeModel from './models/Employee.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js';

dotenv.config();

const app = express()
app.use(express.json())
app.use(cors())


//getting connected with mongodb
connectDB();

app.post('/', (req, res) => {
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
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server is running ${PORT} `)
})