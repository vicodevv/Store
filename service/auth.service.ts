const User = require("../models/user.models");
const bcrypt = require("bcrypt");

export class AuthService {
  async login(email: string, password: string): Promise<{ user: any }> {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('Invalid email or password');
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new Error('Invalid email or password');
    }

    // If authentication is successful, return the user object
    return { user };
  }

  async register(firstName: string, lastName: string, email: string, password: string): Promise<{
    user: any;
  }> {
    const existing = await User
        .findOne
        ({ email });
    if (existing) {
        throw new Error('User with this email already exists');
        }
    const hash = await bcrypt.hash(password, 10);
    const user = new User({
        firstName,
        lastName,
        email,
        password: hash,
    });

    await user.save();
    return { user };

}

}
