import React from 'react'
import useDetails from './useDetails';

export default function Users() {
    const [data] = useDetails("https://jsonplaceholder.typicode.com/users");
  return (
    <div>
        <h1>Users</h1>
        {
            data.map((user) => (
                < p key={user.id}>{user.username}</p>
            ))
        }

        </div>
  )
}
