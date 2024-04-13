import './App.css'
import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'

function App() {

  return (
    <>
      <h1>Today`s TODO list</h1>
      <NewTodo  />
      <TodoList />
    </>
  )
}

export default App
