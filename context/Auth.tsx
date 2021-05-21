import { createContext, useEffect, useState } from 'react';

import { firebase } from '../firebase/clientApp';

type AuthContextProps = {
  currentUser: firebase.User | null | undefined;
};

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined });

const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<
    firebase.User | null | undefined
  >(undefined);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser: currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
