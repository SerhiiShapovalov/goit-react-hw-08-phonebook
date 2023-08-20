import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
// import { useForm } from 'react-hook-form';
import {
  // FormErrorMessage,
  FormLabel,
  // FormControl,
  Input,
  Button,
} from '@chakra-ui/react';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <FormLabel className={css.label}>
        Username
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="name"
          {...register('name', {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
        />
      </FormLabel>
      <label className={css.label}>
        Email
        <Input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <Input type="password" name="password" />
      </label>
      <Button mt={4} colorScheme="teal" type="submit">
        Register
      </Button>
    </form>
  );
};
