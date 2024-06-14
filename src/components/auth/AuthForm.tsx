
// Importing necessary dependencies for the AuthForm component
import React, { useCallback, useEffect, useState } from 'react';
import Input from './Input';
import Button from './Button';
import AuthFootLink from './AuthFootLink';
import { loginScheme } from '../../utils/loginScheme';
import { registerScheme } from '../../utils/registerScheme';
import { fetchAuthToken } from '../../service/api';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import Alert from '../ui/Alert';
// Defining the type for the props of the AuthForm component
type Props = {
  heading?: string; // Optional heading text
  mode?: string; // Optional mode, used to determine the authentication scheme
}

// Defining the AuthForm component
const AuthForm = React.memo(({
  heading = '', // Default heading text
  mode = '' // Default mode
}: Props) => {
  // Destructuring useAppDispatch and useNavigate hooks
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Using useSelector hook to access the authentication state from the Redux store
  const auth = useSelector((state: any) => state.auth);

  // Determining the authentication scheme based on the mode prop
  const scheme = mode === 'register' ? registerScheme : loginScheme;

  // Defining the state variables for credentials and errors
  const [credentials, setCredentials] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Defining the handleInputChange function to update the credentials state
  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials(prevCredentials => ({ ...prevCredentials, [name]: value }));
  }, []);

  // Defining the handleRegister function to handle the form submission
  const handleRegister = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Validating the credentials using the appropriate authentication scheme
      await scheme.validate(credentials, { abortEarly: false });
      setErrors({});
      // Dispatching the fetchAuthToken action to initiate the authentication process
      dispatch(fetchAuthToken({ credentials, mode }));
    } catch (validationErrors: any) {
      const newErrors: { [key: string]: string } = {};
      // Handling validation errors and updating the errors state
      validationErrors.inner.forEach((error: any) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  }, [credentials, dispatch, scheme]);

  // Using useEffect hook to navigate to the appropriate page after authentication status changes
  useEffect(() => {
    const { status } = auth?.login ?? {};
    if (status === 'success') {
      navigate('/dashboard');
    }
  }, [auth?.login?.status, navigate]);

  // Returning the JSX for the AuthForm component
  return (
    <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
      <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
        <span className="mb-1.5 block font-medium">Start for free</span>
        <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
          {heading}
        </h2>

        <form onSubmit={handleRegister}>
          {mode === "register" && <Input
            value={credentials.name}
            label="Name"
            placeholder="Enter your full name"
            type="text"
            onChangeFunction={handleInputChange}
            error={errors.name}
          />}

          <Input
            value={credentials.email}
            label="Email"
            placeholder="Enter your email"
            type="email"
            onChangeFunction={handleInputChange}
            error={errors.email}
          />

          <Input
            value={credentials.password}
            label="Password"
            placeholder="Enter your password"
            type="password"
            onChangeFunction={handleInputChange}
            error={errors.password}
          />

          <Button handleClick={handleRegister} text="Register" />
          <AuthFootLink text="Already have an account? " link="/login" linkText="Sign in" />

          {
            auth?.login?.status === "error" && <Alert text={auth?.login?.data} />
           }
        </form>
      </div>
    </div>
  );
});

// Exporting the AuthForm component
export default AuthForm;

