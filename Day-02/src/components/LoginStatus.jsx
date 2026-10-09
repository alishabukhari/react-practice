import React from 'react'
import { useState } from 'react';

function LoginStatus() {
    const [isLoggedIn, setIsLoggedin] = useState(false);

  return (
    <div style = {{textAlign : "center", marginTop: '40px', fontFamily: "Arial"}}>
        <h2>
            {isLoggedIn ? "Welcome Back!" : "Please log in."}
        </h2>
        <button
            onClick={() => setIsLoggedin(!isLoggedIn)} 
            style={{backgroundColor:'#0b7a1f', color:"#fff", fontWeight: "bold", fontSize: "18px", padding: "8px 16px", borderRadius: "6px", cursor: "pointer" }}>
            {isLoggedIn ? "Logout" : "Login"}
        </button>
    </div>
  );
};

export default LoginStatus;
