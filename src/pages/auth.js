import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { LoginButton } from '../components/antd';

function LoginPage() {
  return (        
    <Auth0Provider domain="localhost:8000" clientId="nGSunByAX9RUHrCpJJNfTOViG7f1wGdx"
      authorizationParams={{redirect_uri: "https://localhost:8000"}}
    >          
      <LoginButton />      
    </Auth0Provider>
  )
}

export default LoginPage;