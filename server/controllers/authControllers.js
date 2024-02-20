import { comparePassword, hashPassword } from '../helpers/authHelper.js'
import EmployeeModel from '../models/Employee.js'


export const registerController = async (req, res) => {
    try {

        const { name, email, password } = req.body
        //validation
        if (!name) {
            return res.send({ error: 'Name is required' })
        }
        if (!email) {
            return res.send({ error: 'email is required' })
        }
        if (!password) {
            return res.send({ error: 'passowrd is required' })
        }

        //check user
        const existingUser = await EmployeeModel.findOne({ email })

        //existing user
        if (existingUser) {
            return res.status(200).send({
                success: true,
                message: 'already register please login',
            })
        }

        //register user
        const hashedPassword = await hashPassword(password)

        //save
        const user = await new EmployeeModel({ name, email, password: hashedPassword }).save()

        res.status(201).send({
            success: true,
            message: "User Register successfully",
            user
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Registration',
            error
        })
    }
}

export const loginController = async (res, req) => {
    try {
        const { email, password } = req.body;

        //validation
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Invalid email or password"
            })
        }

        //check user
        const user = await EmployeeModel.findOne({ email: email })
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'Email is not registered'
            })
        }

        const matchPassword = await comparePassword(password, user.password)
        if (!matchPassword) {
            return res.status(200).send({
                success: false,
                message: 'Invalid Password'
            })
        }

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in login',
            error
        })
    }

}