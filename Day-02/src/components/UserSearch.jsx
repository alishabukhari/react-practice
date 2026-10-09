import React from 'react'
import { useState } from 'react';


function UserSearch() {

    const [searchedUser, setSearchedUser] = useState('');

    const users = [ 'Ali', 'Smith', 'John', 'Adam', 'George', 'Alexander'];

    const FilteredUsers = users.filter((user) => 
        user.toLowerCase().includes(searchedUser.toLowerCase())
    
    );

  return (
    <div>
        <hr />
      <h2>UserSearch</h2>
      <input
            placeholder='Search...'
            value={searchedUser}
            onChange={ e => setSearchedUser(e.target.value)}
            style={{backgroundColor: "#ccc", color: "#000", borderRadius: "8px", padding: "5px"}}
      />

        {FilteredUsers.map((user, index) => (
            <li key={index}>{user}</li>
        ))}
    </div>
  );
};

export default UserSearch;
