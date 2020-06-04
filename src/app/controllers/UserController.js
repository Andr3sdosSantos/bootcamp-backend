import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const { id, name, email, password } = req.body;

    await User.create({ id, name, email, password });

    return res.json({
      user: {
        id,
        name,
        email,
      },
    });
  }
}

export default new UserController();
