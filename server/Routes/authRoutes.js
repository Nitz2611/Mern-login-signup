
import express from 'express';
import { homeController, loginController, registerController } from '../controllers/authControllers.js';
import { requiredSignIn } from '../middleware/authMiddleware.js';

//router object
const router = express.Router()

//routing 
//LOGIN || METHOD POST
router.post('/login', loginController)

//post method will send data to database and save it
router.post('/register', registerController)

router.get('/home', requiredSignIn, homeController)

export default router