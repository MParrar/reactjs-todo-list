import { useState, useEffect } from 'react';
import './App.css';
import { Form } from './components/Forms';
import { TodoList } from './components/TodoList';

function App() {


  const [inputText, setinputText] = useState("");
  const [todos, setTodos] = useState(([]));
  const [status, setStatus] = useState('all');
  const [filterTodos, setFilterTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, [])


  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status])


  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilterTodos(todos.filter((item) => item.completed === true));
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter((item) => item.completed === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  }

  const saveLocalTodos = () => {

    localStorage.setItem('todos', JSON.stringify(todos));

  }

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
      <header>

        <h1>Matias' Todo List </h1>
      </header >
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
        setinputText={setinputText} />

      <TodoList
        todos={todos}
        setinputText={setinputText}
        filterTodos={filterTodos}
        setTodos={setTodos} />
    </div>
  );
}

export default App;
