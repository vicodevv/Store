import express from 'express';
import { UserController } from '../controllers/user.controller';

const userRouter = express.Router();
const userController = new UserController();

// User routes
userRouter.get('/find', userController.findUser);
userRouter.put('/update', userController.updateUser);
userRouter.delete('/delete', userController.deleteUser);

export default userRouter;