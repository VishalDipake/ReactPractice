import { useState } from "react";
import { useEffect } from "react";
import TaskItem from "./TaskItem";

function App() {

  const [task, setTask] = useState("");
 const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem("tasks");

  return savedTasks ? JSON.parse(savedTasks) : [];
});
  const [editIndex, setEditIndex] = useState(null);

  // useEffect(() => {
  //   const savedTasks = JSON.parse(localStorage.getItem("tasks"));
  //   if (savedTasks) {
  //     setTasks(savedTasks);
  //   }
  // }, []);

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);  
  
  function addTask(){
    if(task.trim() === "") return;
    setTasks([...tasks, { text: task.trim(), completed: false }]);
    setTask("");
  }

  function deleteTask(index){
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  function toggleTask(index){
    setTasks(tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    ));
  }

  function editTask(index){
    setEditIndex(index);
    setTask(tasks[index].text);
  }

  function saveTask(){
    if(task.trim() === "") return;
    setTasks(tasks.map((item, i) =>
      
      i === editIndex ? { ...item, text: task.trim() } : item
    ));
    setEditIndex(null);
    setTask("");    
  }

  
   
  return (

    
    <div>
<h1>Task Manager</h1>
      <input 
      type = "text"
      value={task}
      onChange={(e) => setTask(e.target.value)}
      placeholder="enter task"
       />

       <button onClick={addTask}>Add Task</button>

       <ul>
        {tasks.map((task, index) =>(

          <TaskItem task={task}
             index={index}
               onDelete={deleteTask}
              onToggle={toggleTask}
               onEdit={editTask}
               onSave={saveTask}
               isEditing={editIndex === index}/>
                
  //         <li key={index}
  //         style={{
  //   textDecoration: task.completed ? "line-through" : "none"
  // }}>{task.text}

  //           {editIndex === index ? (
  //               <button onClick={saveTask}>Save</button>
  //           ): (

  //             <button onClick ={()=> editTask(index)}>Edit</button>
  //           )}
          

  //         <button onClick={() => toggleTask(index)}>
  //           {task.completed ? "Undo" : "Complete"}
  //         </button>
  //           <button onClick={() => deleteTask(index)}>
  //             Delete
  //           </button>
  //         </li>
        ))}
       </ul>
    </div>
  );
}

export default App;