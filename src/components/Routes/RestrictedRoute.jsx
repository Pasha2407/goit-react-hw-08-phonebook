import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthenticated } from 'redux/auth/auth.selectors';

export const RestrictedRoute = ({ children }) => {
  const authenticated = useSelector(selectAuthenticated);
  return authenticated ? <Navigate to="/contacts" replace /> : children;
};
