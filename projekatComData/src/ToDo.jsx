import React, { useState, useEffect } from 'react';

const ToDo = ({ setLoading }) => {
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
     
      setTimeout(() => {
        setTodos(data);
        setLoading(false);
      }, 500);
    } catch (error) {
      console.error('Error fetching todos:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>To-Do List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Todos</th>
            <th>Completed </th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td className='like'>{todo.completed ? '✔️' : '⏳'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDo;
