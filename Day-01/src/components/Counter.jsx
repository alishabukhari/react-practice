import React, {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0);

  return (
      <div style = {{ gap: "10px" }}>
        <h2>COUNT: {count}</h2>
        <button
            style={{background: "#333", color:"#fff", padding: '8px 16px', borderRadius: "15px" }}  
            onClick = {() => 
            setCount(current => current + 1)
        }>
        +
        </button>
        
        <button 
            style={{background: "#333", color:"#fff", padding: '8px 16px', borderRadius: "15px" }} 
            onClick = {() =>
            setCount(current => current - 1)
        }>
        -
        </button>

        <button
            style={{background: "#333", color:"#fff", padding: '8px 16px', borderRadius: "15px" }}  
            onClick = {() =>
            setCount(0)
        }>
            Reset
        </button>
      </div>
  );
};

export default Counter;
