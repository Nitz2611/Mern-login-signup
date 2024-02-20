
import express from 'express';
import { loginController, registerController } from '../controllers/authControllers.js';

//router object
const router = express.Router()

//routing 
//LOGIN || METHOD POST
router.post('/', loginController)

//post method will send data to database and save it
router.post('/register', registerController)

export default router