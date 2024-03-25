import { Request, Response } from 'express';
import { AuthService } from '../service/auth.service';

const authService = new AuthService();

export class AuthController {
    async register(req: Request, res: Response) {
        const { firstName, lastName, email, password } = req.body;
        try {
            const { user } = await authService.register(firstName, lastName, email, password);
            res.status(201).json({ user });
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    async login(req: Request, res: Response) {
        const { email, password } = req.body;
        try {
            const { user } = await authService.login(email, password);
            res.json({ user });
        } catch (error: any) {
            res.status(401).json({ message: error.message });
        }
    }
}
