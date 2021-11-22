import { User } from '@firebase/auth';
import { setDoc, doc, collection } from 'firebase/firestore';
import { firestore } from 'Src/lib/firebase';

export const createUser = async (user: User): Promise<UserData> => {
  const usersRef = collection(firestore, 'users');
  const data = {
    email: user.email || '',
    wanikani_api_key: '',
    bunpro_api_key: '',
  };
  await setDoc(doc(usersRef, user.uid), data);
  return data;
};
