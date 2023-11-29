import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/services';

export const Login = () => {
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    const element = event.currentTarget.elements;
    const email = element.email.value;
    const password = element.password.value;
    const formData = {
      email,
      password,
    };
    dispatch(loginThunk(formData));
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        <p>Email:</p>
        <input
          type="email"
          placeholder="hotmail@hotmail.com"
          required
          name="email"
        />
      </label>
      <label>
        <p>Password:</p>
        <input
          type="password"
          placeholder="*******"
          required
          name="password"
          minLength={7}
        />
      </label>
      <br />
      <button type="submit">Log in</button>
    </form>
  );
};