import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import {
  FormLabel,
  Input,
  Button,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { PasswordInput } from '../RegisterForm/PasswordInput';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    let isValid = true;
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (!isValid) {
      return;
    }

    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <FormControl isInvalid={!!emailError}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <FormErrorMessage>{emailError}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!passwordError}>
        <FormLabel>Password</FormLabel>
        <PasswordInput
          placeholder="Enter password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <FormErrorMessage>{passwordError}</FormErrorMessage>
      </FormControl>

      <Button mt={4} colorScheme="teal" type="submit">
        Log In
      </Button>
    </form>
  );
};
