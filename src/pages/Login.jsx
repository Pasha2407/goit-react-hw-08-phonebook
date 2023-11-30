import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from 'redux/auth/auth.services';
import { selectAuthError } from 'redux/auth/auth.selectors';
import css from 'components/Form.module.css';

export const Login = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

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
    <div className={css.Container}>
      <form onSubmit={onSubmit}>
        <label>
          <p>Email</p>
          <input
            type="email"
            placeholder="example@gmail.com"
            required
            name="email"
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            placeholder="*******"
            required
            name="password"
            minLength={7}
          />
        </label>
        <button type="submit">Log in</button>
        {error && (
          <>
            <span style={{ color: 'red' }}>Error Log in!</span>
            <small>Maybe wrong password or email</small>
          </>
        )}
      </form>
    </div>
  );
};
