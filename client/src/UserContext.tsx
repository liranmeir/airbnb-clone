import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

interface User {
  name: string;
  email: string;
  password: string;
}
type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  ready: boolean;
};

export const UserContext = createContext<Partial<UserContextType>>({});

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (!user) {
      axios.get('/profile').then(({ data }) => {
        setUser(data);
        setReady(true);
      });
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
}
