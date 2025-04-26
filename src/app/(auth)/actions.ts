'use server';

import { z } from 'zod';
import { createUser, getUser } from '@/lib/db/queries/users';
import { signIn } from './auth';

const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(4),
});

const registerSchema = z.object({
  email: z.email(),
  password: z.string().min(4),
  name: z.string(),
});

export interface LoginActionState {
  status: 'idle' | 'in_progress' | 'success' | 'failed' | 'invalid_data';
}

export const login = async (
  _: LoginActionState,
  formData: FormData,
): Promise<LoginActionState> => {
  try {
    const validatedData = loginSchema.parse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    await signIn('credentials', {
      email: validatedData.email,
      password: validatedData.password,
      redirect: false,
    });

    return { status: 'success' };
  } catch (error) {
    console.error(error);
    if (error instanceof z.ZodError) {
      return { status: 'invalid_data' };
    }

    return { status: 'failed' };
  }
};

export const signInWithProvider = async (provider: string) => {
  await signIn(provider, { callbackUrl: '/dashboard' });
};

export interface RegisterActionState {
  status:
    | 'idle'
    | 'in_progress'
    | 'success'
    | 'failed'
    | 'user_exists'
    | 'invalid_data';
}

export const register = async (
  _: RegisterActionState,
  formData: FormData,
): Promise<RegisterActionState> => {
  try {
    const validatedData = registerSchema.parse({
      email: formData.get('email'),
      password: formData.get('password'),
      name: formData.get('name'),
    });

    const [user] = await getUser(validatedData.email);

    if (user) {
      return { status: 'user_exists' } as RegisterActionState;
    }
    await createUser(
      validatedData.email,
      validatedData.password,
      validatedData.name,
    );
    await signIn('credentials', {
      email: validatedData.email,
      password: validatedData.password,
      redirect: false,
    });
    return { status: 'success' };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { status: 'invalid_data' };
    }

    return { status: 'failed' };
  }
};
