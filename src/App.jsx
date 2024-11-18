import React, { useState } from 'react'
import TodoFoem from './TodoFoem'
import Todo from './Todo'
import './App.css'
function App() {
  let [todos, setTodos] = useState([])
  const [todoShow, setTodoShow] = useState('All')
  const addTodos = (todo) => {
    setTodos([todo, ...todos])
  }

  const deleteHandel = (id) => {
    setTodos(todos.filter((todo)=> todo.id !== id))
  }
  const updateTodoTOShow = (s) =>{
    setTodoShow(s);
  } 

  if(todoShow === 'active'){
    todos = todos.filter((todo) => !todo.complete);
  }
  else if(todoShow === 'complete'){
    todos = todos.filter((todo) => todo.complete)
  }
  else{
    
  }
  return (
    <div>
      <TodoFoem onSubmit={addTodos} />
      {
        todos.map((todo) => (
            <Todo key={todo.id} todo={todo} onDelete={deleteHandel} />
        ))
      }
      <button onClick={() => updateTodoTOShow('All')}>All</button>
      <button onClick={() => updateTodoTOShow('complete')}>complete</button>
      <button onClick={() => updateTodoTOShow('active')}>active</button>
    </div>
  )
}

export default App