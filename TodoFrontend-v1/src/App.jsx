// /* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import CreateTodo from './components/CreateTodo'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setInterval(() => {
      fetch("http://localhost:3000/todos")
      .then(async (res) => {
        const json = await res.json();
        setTodos(json)
        // console.log(json);
      })
    }, 5000);

  }, [])

  return (
    <div>
      <CardWrapper>
        <CreateTodo></CreateTodo>
      </CardWrapper>
      <CardWrapper><TodoList todos={todos}></TodoList></CardWrapper>
    </div>
  )
}

function CardWrapper({ children }) {

  //create a div which has a border "2px solid black"
  // inside the div, renders the props
  return (
    <div style={{ border: "2px solid black", padding: 20, margin: 20 }}>
      {children}
    </div>
  );
}

export default App
