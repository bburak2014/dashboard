import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {

  const auth = useSelector((state: any) => state.auth);

  if (!auth.isAuthanticated && auth.status !== 'loading') {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;