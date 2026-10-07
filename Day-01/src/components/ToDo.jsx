import React, {useState} from 'react'

function ToDo() {

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function addTask(e) {

    const taskName = task;
    setTasks (prevtasks => [...prevtasks, taskName]);
    setTask('');
  };

  return (
    <div>
      <h2 style={{color: "#0019d8", fontWeight: "bold", textDecoration: "underlined", fontFamily: "Arial" }}>ToDo</h2>
      <input
        placeholder="enter your task"
        value={task}
        onChange={e => setTask(e.target.value)}
      />
      <button 
        type="button" 
        onClick={addTask}
        style={{backgroundColor: "green", color: "white", borderRadius: "5px", padding: "5px", marginLeft: "10px" }}
        >
        ADD
      </button>

      <ul>
        {tasks.map((taskName, index) => (
          <li key={index}>{taskName}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
