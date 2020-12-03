import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Link } from 'react-router-dom';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return(
    <Link
      className="dropdown-item"
      style={{ cursor: "pointer" }}
      onClick={() => loginWithRedirect()}
      >
        Log In
      </Link>
  );
};

export default LoginButton;