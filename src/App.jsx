import { useState, useEffect } from 'react';
import './index.css';
import TodoList from './components/TodoList';

function App() {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Baixa');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleAddTask = () => {
    if (task.trim()) {
      const newTask = { task, priority };
      setTasks([...tasks, newTask]);
      setTask('');
      setPriority('Baixa');
    }
  };

  const handleDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter(t => t.task !== taskToDelete.task));
  };

  return (
    <div className="container">
      <h1>Lista de tarefas</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="Baixa">Baixa</option>
          <option value="Média">Média</option>
          <option value="Alta">Alta</option>
        </select>
        <button onClick={handleAddTask}>Adicionar</button>
      </div>
      <TodoList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
