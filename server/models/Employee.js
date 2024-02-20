import mongoose from "mongoose";

//creating schema means creating elements and defining types in database collection

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String
})

//creating model of collection
const EmployeeModel = mongoose.model("employees", EmployeeSchema);


export default EmployeeModel 