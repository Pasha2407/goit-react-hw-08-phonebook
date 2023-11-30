import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthenticated } from 'redux/auth/auth.selectors';

export const PrivateRoute = ({ children }) => {
  const authenticated = useSelector(selectAuthenticated);
  return authenticated ? children : <Navigate to="/login" replace />;
};
