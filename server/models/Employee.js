import mongoose from "mongoose";

//creating schema means creating elements and defining types in database collection

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true
    }
})

//creating model of collection
const EmployeeModel = mongoose.model("employees", EmployeeSchema);


export default EmployeeModel 