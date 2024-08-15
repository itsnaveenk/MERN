import { useState } from 'react'
import CreateTodo from './components/CreateTodo'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([{
    title:"hello1",
    description: "hello1",
    completed:false
  },
  {
    title:"hello2",
    description: "hello3",
    completed:true
  }
]);
  
  return (
    <div>
      <CreateTodo></CreateTodo>
      <TodoList todos={todos}></TodoList>
    </div>
  )
}

export default App
