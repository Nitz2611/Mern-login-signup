import { comparePassword, hashPassword } from '../helpers/authHelper.js'
import EmployeeModel from '../models/Employee.js'
import JWT from 'jsonwebtoken'

//POST SIGNUP
export const registerController = async (req, res) => {
    try {

        const { name, email, password } = req.body
        //validation
        if (!name) {
            return res.send({ message: 'Name is required' })
        }
        if (!email) {
            return res.send({ message: 'email is required' })
        }
        if (!password) {
            return res.send({ message: 'passowrd is required' })
        }

        //check user
        const existingUser = await EmployeeModel.findOne({ email })

        //existing user
        if (existingUser) {
            return res.status(200).send({
                success: false,
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

//POST LOGIN
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
        const user = await EmployeeModel.findOne({ email })
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

        //token generation
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" })

        res.status(200).send({
            success: true,
            message: 'login successfully',
            user: {
                name: user.name,
                email: user.email,
            },
            token
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in login',
            error
        })
    }

}

export const homeController = async (res, req) => {
    res.send("protected route")
}