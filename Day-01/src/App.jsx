import { useState } from 'react'
import './App.css'
import Greeting from '/src/components/Greeting'
import Counter from '/src/components/Counter'
import ToDo from '/src/components/ToDo'
import UserList from '/src/components/UserList'
import users from '/src/components/users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Greeting name="Ali" />
      <Counter />
      <ToDo />
      <UserList users = {users} />
    </div>
  );
};

export default App;
