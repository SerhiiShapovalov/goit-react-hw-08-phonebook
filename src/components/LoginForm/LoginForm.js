// // import { useDispatch } from 'react-redux';
// // import { logIn } from '../../redux/auth/operations';
// // import { PasswordInput } from '../RegisterForm/PasswordInput';
// // import css from './LoginForm.module.css';
// // // import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react';
// // // // `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
// // // import chakraTheme from '@chakra-ui/theme';

// // // const { Button } = chakraTheme.components;

// // // const theme = extendBaseTheme({
// // //   components: {
// // //     Button,
// // //   },
// // // });

// // import { useForm } from 'react-hook-form';
// // import {
// //   FormErrorMessage,
// //   FormLabel,
// //   FormControl,
// //   Input,
// //   Button,
// // } from '@chakra-ui/react';

// // export function LoginForm() {
// //   const dispatch = useDispatch();
// //   const {
// //     handleSubmit,
// //     formState: { errors, isSubmitting },
// //     register,
// //   } = useForm();

// //   const onSubmit = data => {
// //     dispatch(
// //       register({
// //         email: data.email,
// //         password: data.password,
// //       })
// //     );
// //   };

// //   return (
// //     <form
// //       className={css.form}
// //       onSubmit={handleSubmit(onSubmit)}
// //       autoComplete="off"
// //     >
// //       <FormControl isInvalid={errors.email}>
// //         <FormLabel>
// //           Email
// //           <Input
// //             type="email"
// //             name="email"
// //             id="email"
// //             placeholder="Enter your email"
// //             {...register('email', {
// //               required: 'This is required',
// //               pattern: {
// //                 value: /^\S+@\S+$/i,
// //                 message:
// //                   'The email address must contain the "@" symbol. And after the "@" symbol, the full address must be specified.',
// //               },
// //             })}
// //           />
// //         </FormLabel>
// //         <FormErrorMessage>
// //           {errors.email && errors.email.message}
// //         </FormErrorMessage>
// //       </FormControl>
// //       <FormControl isInvalid={errors.password}>
// //         <FormLabel>
// //           Password
// //           <PasswordInput
// //             {...register('password', {
// //               required: 'This is required',
// //               minLength: { value: 6, message: 'Minimum length should be 6' },
// //             })}
// //           />
// //         </FormLabel>
// //         <FormErrorMessage>
// //           {errors.password && errors.password.message}
// //         </FormErrorMessage>
// //         <Button
// //           mt={4}
// //           colorScheme="teal"
// //           isLoading={isSubmitting}
// //           type="submit"
// //         >
// //           Log In
// //         </Button>
// //       </FormControl>
// //     </form>
// //   );
// // }

// import { useDispatch } from 'react-redux';
// import { logIn } from '../../redux/auth/operations';
// import css from './LoginForm.module.css';
// // import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react';
// // // `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
// // import chakraTheme from '@chakra-ui/theme';
// // const { Button } = chakraTheme.components;
// // const theme = extendBaseTheme({
// //   components: {
// //     Button,
// //   },
// // });
// // import { useForm } from 'react-hook-form';
// import {
//   // FormErrorMessage,
//   FormLabel,
//   // FormControl,
//   Input,
//   Button,
// } from '@chakra-ui/react';
// // import { PasswordInput } from '../RegisterForm/PasswordInput';

// export const LoginForm = () => {
//   const dispatch = useDispatch();
//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       logIn({
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };

//   return (
//     <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
//       <FormLabel className={css.label}>
//         Email
//         <Input type="email" name="email" />
//       </FormLabel>
//       <FormLabel className={css.label}>
//         Password
//         <Input type="password" name="password" />
//       </FormLabel>
//       <Button mt={4} colorScheme="teal" type="submit">
//         Log In
//       </Button>
//     </form>
//   );
// };

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
