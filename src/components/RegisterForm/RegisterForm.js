// import { useDispatch } from 'react-redux';
// import { register } from '../../redux/auth/operations';
// // import { useForm } from 'react-hook-form';
// // import {
// //   FormErrorMessage,
// //   FormLabel,
// //   FormControl,
// //   Input,
// //   Button,
// // } from '@chakra-ui/react';
// // import { PasswordInput } from './PasswordInput';
// import css from './RegisterForm.module.css';

// export const RegisterForm = () => {
//   const dispatch = useDispatch();
//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       register({
//         name: form.elements.name.value,
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };

//   return (
//     <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
//       <label className={css.label}>
//         Username
//         <input type="text" name="name" />
//       </label>
//       <label className={css.label}>
//         Email
//         <input type="email" name="email" />
//       </label>
//       <label className={css.label}>
//         Password
//         <input type="password" name="password" />
//       </label>
//       <button type="submit">Register</button>
//     </form>
//   );
// };

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
} from '@chakra-ui/react';
import { PasswordInput } from './PasswordInput';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    let isValid = true;
    if (!name) {
      setNameError('Username is required');
      isValid = false;
    } else {
      setNameError('');
    }

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

    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <FormControl isInvalid={!!nameError}>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <FormErrorMessage>{nameError}</FormErrorMessage>
      </FormControl>

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
        Register
      </Button>
    </form>
  );
};
