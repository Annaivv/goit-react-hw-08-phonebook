import { FormLabel, Form } from './RegisterForm.styled';

export const RegisterForm = () => {
  return (
    <Form>
      <FormLabel>
        Username
        <input type="text" name="name" />
      </FormLabel>
      <FormLabel>
        Email
        <input type="email" name="email" />
      </FormLabel>
      <FormLabel>
        Password
        <input type="password" name="password" />
      </FormLabel>
      <button type="submit">Register</button>
    </Form>
  );
};
