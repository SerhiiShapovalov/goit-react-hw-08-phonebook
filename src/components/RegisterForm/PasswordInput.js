import React from 'react';
import { Input, Button, InputGroup, InputRightElement } from '@chakra-ui/react';

// export const PasswordInput = React.forwardRef((props, ref) => {
//   const [show, setShow] = React.useState(false);
//   const handleClick = () => setShow(!show);
export function PasswordInput({ value, onChange }) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup>
      <Input
        type={show ? 'text' : 'password'}
        placeholder="Enter password"
        value={value} // Передаем значение
        onChange={onChange} // Передаем функцию обработки изменений
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
