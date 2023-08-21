import { useDispatch } from 'react-redux';
// import { logIn } from '../../redux/auth/operations';
import { PasswordInput } from '../RegisterForm/PasswordInput';
import css from './LoginForm.module.css';
// import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react';
// // `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
// import chakraTheme from '@chakra-ui/theme';

// const { Button } = chakraTheme.components;

// const theme = extendBaseTheme({
//   components: {
//     Button,
//   },
// });

import { useForm } from 'react-hook-form';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react';

export function LoginForm() {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    register,
  } = useForm();

  const onSubmit = data => {
    dispatch(
      register({
        email: data.email,
        password: data.password,
      })
    );
  };

  return (
    <form
      className={css.form}
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <FormControl isInvalid={errors.email}>
        <FormLabel>
          Email
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            {...register('email', {
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
          {errors.email && errors.email.message}
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
          Log In
        </Button>
      </FormControl>
    </form>
  );
}
