import React from 'react'

function UserList({ users }) {

  return (
    <div>
        <h2>USERS</h2>
        <ul>
            {users.map(([id, name]) => (
                <li key={id}>{name}</li>
            ))}
        </ul>
      
    </div>
  );
};

export default UserList;
