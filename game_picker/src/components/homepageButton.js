import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Link } from 'react-router-dom';

const HomeButton = () => {
  const { loginWithRedirect } = useAuth0();

  return(
    <Link
      className="btn btn-secondary"
      style={{ cursor: "pointer" }}
      onClick={() => loginWithRedirect()}
      >
        Sign In
      </Link>
  );
};

export default HomeButton;