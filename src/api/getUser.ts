import { getDoc, doc } from 'firebase/firestore';
import { useQuery } from 'react-query';
import { createUser } from './createUser';
import { auth, firestore } from 'Src/lib/firebase';

export const GET_USER_KEY = 'getUser';

export const getUser = async (): Promise<UserData> => {
  const user = auth.currentUser;

  if (!user) {
    throw new Error('User must be authenticated to call this method');
  }

  const document = doc(firestore, 'users', user.uid);
  const snapshot = await getDoc(document);

  if (!snapshot.exists()) {
    return createUser(user);
  } else {
    return snapshot.data() as UserData;
  }
};

export const useGetUser = () => {
  return useQuery(GET_USER_KEY, getUser);
};
