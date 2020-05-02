import React from 'react';

import SignIn from './pages/Signin';
import SignUp from './pages/SignUp';
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <SignUp />
    </>
  );
};

export default App;
