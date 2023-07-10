import { useState } from 'react'
import './App.css'
import Todos from './components/Todos'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
  ])


  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }

      return todo
    })

    setTodos(updatedTodos)
  }

  const deleteTodo = (targetId) => {
    const updatedTodos = todos.filter(todo => todo.id !== targetId)
    setTodos(updatedTodos)
  }

  return (
    <div style={style.container}>
      <h1 style={style.title}>My Todo List</h1>
      <Todos todos={todos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} />
    </div>
  )
}

const style = {
  container: {
    textAlign: 'center',
    padding: '12px',
  },
  title: {
    fontSize: '36px'
  }
}

export default App
