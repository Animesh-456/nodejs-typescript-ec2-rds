import { Request, Response } from 'express';
import * as userService from '../services/user.service';

export const getUsers = async (_: Request, res: Response) => {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching users' });
  }
};

export const getUserByEmail = async (req: Request, res: Response) => {
  const { email } = req.query;
  try {
    const user = await userService.getUserByEmail(email as string);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error fetching user' });
  }
}

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    await userService.createUser(name, email);
    res.status(201).json({ message: 'User created' });
  } catch (err) {
    res.status(500).json({ error: 'Error creating user' });
  }
};
