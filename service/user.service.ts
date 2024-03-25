const User = require("../models/user.models");

export class UserService {
  async findUser(email: string): Promise<{ user: any }> {
    const user
    = await User.findOne
    ({ email });
    if (!user) {
      throw new Error('User not found');
    }
    return { user };
    }
    async updateUser(email: string, firstName: string, lastName: string
    ): Promise<{ user: any }> {
    const user
    = await User.findOne
    ({ email });
    if (!user) {
      throw new Error('User not found');
    }
    user.firstName = firstName;
    user.lastName = lastName;
    await user.save();
    return { user };
    }
    async deleteUser(email: string): Promise<{ user: any }> {
    const user
    = await User.findOne
    ({ email });
    if (!user) {
      throw new Error('User not found');
    }
    await user.remove();
    return { user };
    }

}

