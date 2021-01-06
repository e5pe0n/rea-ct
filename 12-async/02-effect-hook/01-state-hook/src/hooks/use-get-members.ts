import { useEffect, useState } from 'react';
import { User, getMembers } from 'domains/github';

type ReturnValue = {
  users: User[];
  isLoading: boolean;
};

const useGetMembers = (orgCode: string): ReturnValue => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const load = async (): Promise<void> => {
      setisLoading(true);

      try {
        const usersData = await getMembers(orgCode);
        setUsers(usersData);
      } catch (err) {
        throw new Error(`organization "${orgCode}" not exists`);
      } finally {
        setisLoading(false);
      }
    };
    void load();
  }, [orgCode]);

  return { users, isLoading };
};

export default useGetMembers;
