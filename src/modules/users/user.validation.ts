import { z } from 'zod';

export const userValidation = {
  createTrainer: z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
    name: z.string().min(1, { message: 'Name is required' }),
    role: z.literal('Trainer', { message: 'Role must be Trainer' }),
  }),
};