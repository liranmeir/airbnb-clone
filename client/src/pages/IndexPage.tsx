import { useEffect, useState } from 'react';
import axios from 'axios';
//create a search bar when you type in you get the result rendered as cards
interface User {
  id: number;
  name: string;
  email: string;
  friends: [];
}
interface UserWithFriends {
  id: number;
  name: string;
  email: string;
  friends: [];
}

export default function IndexPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [usersWithFriends, setUsersWithFriends] = useState<UserWithFriends[]>(
    []
  );

  // const [term, setTerm] = useState('');
  // const handleSearch = (e) => {
  //   setTerm(e.target.value);
  // };

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users?_limit=9')
      .then((response) => {
        setUsers(response.data);

        console.log(users);
      });
  }, []);

  return (
    <div className='grid grid-cols-3 gap-4 justify-center items-center'>
      <input type='text' className='col-span-3 mb-4 p-2 rounded border' />
      {users.map((user) => (
        <div
          key={user.id}
          className='border max-w-sm rounded shadow-lg flex flex-col items-center '
        >
          <h2 className='font-bold text-xl mb-2'>{user.name}</h2>
          <p>{user.email}</p>
          <img
            src={`https://robohash.org/${user.id}?size=200x200`}
            alt='User'
          />
        </div>
      ))}
    </div>
  );
}
