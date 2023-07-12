import { useState, createContext } from 'react'
import './App.css'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'

export const TodoContext = createContext()

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

  const addTodo = (title) => {
    if (title.length > 0) {
      const newTodo = {
        id: todos.length + 1,
        title,
        completed: false
      }

      const updatedTodos = [...todos, newTodo]

      setTodos(updatedTodos)
    }
  }

  return (
    <TodoContext.Provider value={{ toggleCompleted, deleteTodo }}>
      <div style={style.container}>
        <h1 style={style.title}>My Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <Todos todos={todos} />
      </div>
    </TodoContext.Provider>
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
