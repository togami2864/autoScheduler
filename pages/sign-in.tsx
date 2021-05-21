import { useEffect, useContext } from 'react';
import Router from 'next/router';
import { firebase } from '../firebase/clientApp';
import { AuthContext } from '../context/Auth';

export default function SignIn() {
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    currentUser && Router.push('/');
  }, [currentUser]);

  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };
  return (
    <div>
      <button onClick={login}>google login</button>
    </div>
  );
}
