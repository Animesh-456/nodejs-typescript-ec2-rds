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

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    await userService.createUser(name, email);
    res.status(201).json({ message: 'User created' });
  } catch (err) {
    res.status(500).json({ error: 'Error creating user' });
  }
};
