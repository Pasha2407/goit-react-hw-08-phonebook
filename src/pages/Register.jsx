import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/auth.services';
import css from 'components/Form.module.css';

export const Register = () => {
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    const element = event.currentTarget.elements;
    const name = element.name.value;
    const email = element.email.value;
    const password = element.password.value;
    const formData = {
      name,
      email,
      password,
    };
    dispatch(registerThunk(formData));
  };

  return (
    <div className={css.Container}>
      <form onSubmit={onSubmit}>
        <label>
          <p>Name</p>
          <input type="text" placeholder="Tony Stark" required name="name" />
        </label>
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
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};
