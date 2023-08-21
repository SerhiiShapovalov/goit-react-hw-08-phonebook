import { useDispatch } from 'react-redux';
// import { register } from '../../redux/auth/operations';
import { useForm } from 'react-hook-form';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react';
import { PasswordInput } from './PasswordInput';
// import css from './RegisterForm.module.css';

export function RegisterForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = data => {
    dispatch(
      register({
        name: data.name,
        email: data.email,
        password: data.password,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <FormControl isInvalid={errors.name}>
        <FormLabel>
          Username
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            {...register('name', {
              required: 'This is required',
              minLength: { value: 4, message: 'Minimum length should be 4' },
            })}
          />
        </FormLabel>
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.Email}>
        <FormLabel>
          Email
          <Input
            type="Email"
            name="Email"
            id="Email"
            placeholder="Enter your email"
            {...register('Email', {
              required: 'This is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message:
                  'The email address must contain the "@" symbol. And after the "@" symbol, the full address must be specified.',
              },
            })}
          />
        </FormLabel>
        <FormErrorMessage>
          {errors.Email && errors.Email.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.password}>
        <FormLabel>
          Password
          <PasswordInput
            {...register('password', {
              required: 'This is required',
              minLength: { value: 6, message: 'Minimum length should be 6' },
            })}
          />
        </FormLabel>
        <FormErrorMessage>
          {errors.password && errors.password.message}
        </FormErrorMessage>
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Register
        </Button>
      </FormControl>
    </form>
  );
}
