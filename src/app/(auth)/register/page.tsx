'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect, useState } from 'react';
import { RegisterForm } from '@/components/register-form';
import { SubmitButton } from '@/components/submit-button';
import { register, type RegisterActionState } from '../actions';
import { toast } from '@/components/toast';
import { useSession } from 'next-auth/react';

export default function RegisterPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);
  const { update: updateSession } = useSession();

  const [state, formAction] = useActionState<RegisterActionState, FormData>(
    register,
    {
      status: 'idle',
    },
  );

  useEffect(() => {
    if (state.status === 'user_exists') {
      toast({
        type: 'error',
        description: state.message || 'Account already exists!',
      });
    } else if (state.status === 'failed') {
      toast({
        type: 'error',
        description: state.message || 'Failed to create account!',
      });
    } else if (state.status === 'invalid_data') {
      toast({
        type: 'error',
        description: state.message || 'Failed validating your submission!',
      });
    } else if (state.status === 'success') {
      toast({ type: 'success', description: 'Account created successfully!' });
      setIsSuccessful(true);
      updateSession();
      router.push('/dashboard');
    }
  }, [state, router]);

  const handleSubmit = (formData: FormData) => {
    setEmail(formData.get('email') as string);
    setName(formData.get('name') as string);
    formAction(formData);
  };

  return (
    <div className="flex h-dvh w-screen items-start pt-12 md:pt-0 md:items-center justify-center bg-background">
      <div className="w-full max-w-md overflow-hidden rounded-2xl gap-12 flex flex-col">
        <div className="flex flex-col items-center justify-center gap-2 px-4 text-center sm:px-16">
          <h3 className="text-xl font-semibold dark:text-zinc-50">Sign Up</h3>
        </div>
        <RegisterForm
          action={handleSubmit}
          defaultEmail={email}
          defaultName={name}
          fieldErrors={state.fieldErrors}
        >
          <SubmitButton isSuccessful={isSuccessful}>Sign Up</SubmitButton>
          <p className="text-center text-sm text-gray-600 mt-4 dark:text-zinc-400">
            {'Already have an account? '}
            <Link
              href="/login"
              className="font-semibold text-gray-800 hover:underline dark:text-zinc-200"
            >
              Log In
            </Link>
            {' instead.'}
          </p>
        </RegisterForm>
      </div>
    </div>
  );
}
