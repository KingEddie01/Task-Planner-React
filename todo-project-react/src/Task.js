export const Task = (props)=>{
  return <div className="task" 
    style ={{backgroundColor : props.completed ? "green" : "transparent"}} >

    <p>
      {props.taskName}
    </p>
    <p>
      {props.date}
    </p>
      <button className="addButton" onClick={()=>props.completeTask(props.id)}>Completed</button>
      <button onClick = {()=>props.deleteTodo(props.id) }>
        Delete
      </button>
            
      </div>
}