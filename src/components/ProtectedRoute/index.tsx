import { TRootState } from '@store';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

interface IProps {
  children: any;
}

const ProtectedRoute = ({ children }: IProps) => {
  const token = useSelector<TRootState, string | undefined>(
    (state: TRootState) => state.auth.accessToken
  );

  return token ? children : <Navigate to="/sign-in" replace />;
};

export default ProtectedRoute;
