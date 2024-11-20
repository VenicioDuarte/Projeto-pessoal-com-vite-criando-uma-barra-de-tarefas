function TodoList({ tasks, onDeleteTask }) {
    if (tasks.length === 0) {
      return <p>Nenhuma tarefa para mostrar. Adicione uma tarefa!</p>
    }
  
    return (
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={`task ${task.priority.toLowerCase()}`}>
            <span>{task.task}</span>
            <span className="priority">{task.priority}</span>
            <button onClick={() => onDeleteTask(task)}>Excluir</button>
          </li>
        ))}
      </ul>
    )
  }
  
  export default TodoList
  