const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee')

const app = express()
app.use(express.json())
app.use(cors())

//getting connected with mongodb
mongoose.connect('mongodb://127.0.0.1:27017/employee');

app.post('/login', (req, res) =>{
    const {email, password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user => {
        if(user) {
            //authenticate password with correct email
            if(user.password === password){
                res.json("Success")
            }
            else{
                res.json("The password is incorrect")
            }
        }
        else{
            res.json("No record existed")
        }
    })
})

//post method will send data to database and save it
app.post('/register', (req,res) =>{
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

//starting server
app.listen(3001, ()=>{
    console.log("Server is running..")
})