import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './redux/Counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const notes = useSelector((state) => state.notes.notes)
  console.log(notes);
// small changes
  return (
    <>
      <div>
        <h2 style={{ marginTop: '30px' }}>📝 Notes</h2>
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <small>Tags: {note.tags.join(', ')}</small>
            </li>
          ))}
        </ul>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(bncrement())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  )
}

export default App