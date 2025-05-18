import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, done: false }]);
      setInput('');
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className='container'>
      <h1>Lista de Tareas</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTask}>Agregar</button>
      <ul>
        {tasks.map((task, i) => (
          <li key={i} style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
            {task.text}
            <button onClick={() => toggleTask(i)}>✓</button>
            <button onClick={() => deleteTask(i)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
