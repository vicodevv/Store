import { Request, Response } from 'express';
import { UserService } from '../service/user.service';

const userService = new UserService();

export class UserController {
    async findUser(req: Request, res: Response) {
        const { email } = req.body;
        try {
            const { user } = await userService.findUser(email);
            res.json({ user });
        } catch (error: any) {
            res.status(404).json({ message: error.message });
        }
    }

    async updateUser(req: Request, res: Response) {
        const { email, firstName, lastName } = req.body;
        try {
            const { user } = await userService.updateUser(email, firstName, lastName);
            res.json({ user });
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteUser(req: Request, res: Response) {
        const { email } = req.body;
        try {
            const { user } = await userService.deleteUser(email);
            res.json({ user });
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
}