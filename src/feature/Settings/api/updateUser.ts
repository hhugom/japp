import { updateDoc, doc, collection } from 'firebase/firestore';
import { useMutation, useQueryClient } from 'react-query';
import { firestore } from 'Src/lib/firebase';
import { GET_USER_KEY, JappUser } from 'Src/api/getUser';
import { useAuth } from 'Src/hook/useAuth';

export type updateUserParameters = {
  update: Partial<UserData>;
};

const handleUpdateUser = async (
  uid: string | undefined,
  { update }: updateUserParameters
): Promise<Partial<UserData>> => {
  const usersRef = collection(firestore, 'users');
  const data = {
    ...update,
  };
  await updateDoc(doc(usersRef, uid), data);
  return update;
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const currentUser = useAuth();
  const { mutateAsync: updateUser, ...rest } = useMutation(
    async (params: updateUserParameters) =>
      handleUpdateUser(currentUser?.uid, params),
    {
      onSuccess: (data) => {
        const userData = queryClient.getQueryData<JappUser>(GET_USER_KEY);
        if (userData) {
          queryClient.setQueryData(GET_USER_KEY, { ...userData, ...data });
        }
      },
    }
  );

  return { updateUser, ...rest };
};
