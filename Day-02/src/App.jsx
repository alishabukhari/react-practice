import { useState } from 'react'
import './App.css'
import LoginStatus from './components/LoginStatus'
import ProductCard from './components/ProductCard'
import UserSearch from './components/UserSearch'
import MessageApp from './components/MessageApp'

function App() {
  return (
   <div>
    <LoginStatus />
    <ProductCard name="Chicken-Fillet" price={1000} />
    <UserSearch />
    <MessageApp />
   </div>
  );
};

export default App;
