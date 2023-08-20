import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
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

// import { useForm } from 'react-hook-form';
import {
  // FormErrorMessage,
  FormLabel,
  // FormControl,
  Input,
  Button,
} from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <FormLabel className={css.label}>
        Email
        <Input type="email" name="email" />
      </FormLabel>
      <FormLabel className={css.label}>
        Password
        <Input type="password" name="password" />
      </FormLabel>
      <Button type="submit">Log In</Button>
    </form>
  );
};
