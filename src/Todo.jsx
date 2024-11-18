import React from 'react'
import './App.css'
function Todo({todo, onDelete}) {

  return (
    <div>
        <div className='fff'>
            {todo.text}
        </div>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  )
}

export default Todo