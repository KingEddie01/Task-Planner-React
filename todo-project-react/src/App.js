import './App.css';
import {useState} from 'react'
import {Task} from './Task'

function App() {
  const [todoList,setTodoList] = useState([]);
  const [newTask,setNewTask] = useState("");
  const [date,setDate] = useState("")
  const [completed, setCompleted] = useState("false")
  const displayed = (event)=>{
      setNewTask(event.target.value);
    }
  const dateDisplay = (event)=>{
    setDate(()=>event.target.value)
  }  
 
  const addTask = ()=>{
        const task = {
          id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id + 1 ,
          taskName: newTask,
          taskDate :date,
          completed : false
    }
    setTodoList([...todoList,task]);
  }
  const completeTask =(id)=>{
    setTodoList(todoList.map((task)=>{
        if (task.id === id ){
          setCompleted(true)
        return {...task, completed}
        }
        else{
          return task;
        }

    }))

  }

  const deleteTodo =(id)=>{
    const newTodoList1 = todoList.filter((task)=>{
      return task.id !== id
    })
    
    setTodoList(newTodoList1);
  
  }
  
  return (
    <div className="whole">
    <div className="App">
      <h1>TASK PLANNER</h1>
      <div className="add-task"></div>
        <input className="text" onChange = {displayed}/>
        <input className="date" type='date' onChange={dateDisplay}/>
        <div>
        <button className="enter" onClick = {addTask}>Add Task</button>
        </div>

      <div className ="list">{todoList.map((task,index)=>{
          return <Task taskName={task.taskName} taskId ={task.id} deleteTodo={()=>deleteTodo(task.id)}
          completed ={task.completed} completeTask={()=>completeTask(task.id)} key={index} date={date}/>
          })}
      </div>
      
    </div>
    </div>
  );
}

export default App;
