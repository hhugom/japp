import { User } from '@firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../lib/firebase';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(auth.currentUser);

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged((newUser) => setUser(newUser));
    return subscriber;
  }, []);

  return user;
};
