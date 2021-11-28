import { getDoc, doc } from 'firebase/firestore';
import { useQuery } from 'react-query';
import { User } from '@firebase/auth';
import { createUser } from './createUser';
import { auth, firestore } from 'Src/lib/firebase';

export const GET_USER_KEY = 'getUser';

export type JappUser = UserData & User;

export const getUser = async (): Promise<JappUser | undefined> => {
  const user = auth.currentUser;

  if (!user) {
    return undefined;
  }

  const document = doc(firestore, 'users', user.uid);
  const snapshot = await getDoc(document);

  if (!snapshot.exists()) {
    const additionalData = await createUser(user);
    return { ...user, ...additionalData };
  } else {
    return { ...user, ...(snapshot.data() as UserData) };
  }
};

export const useGetUser = () => {
  return useQuery(GET_USER_KEY, getUser);
};
