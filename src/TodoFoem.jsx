import React, { useState } from 'react'
import shortid from 'shortid'

function TodoFoem({onSubmit}) {
    const [text, setText] = useState('')


    const handelSubmit = (e) => {
        e.preventDefault()
        onSubmit({
            id : shortid.generate(),
            text : text,
            complete : false
        })
            setText('')
    }
    const handelChange = (e) => {
        setText(e.target.value)
    }
  return (
    <div>
        <form onSubmit={handelSubmit}>
            <input type='text' value={text} onChange={handelChange} />
            <button onClick={handelSubmit}>Add Todo</button>
        </form>
    </div>
  )
}

export default TodoFoem