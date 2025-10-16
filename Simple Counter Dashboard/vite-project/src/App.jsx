import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount,reset } from './redux/Counter/counterSlice'
// Simple Counter Dashboard
// Tech: React + Redux Toolkit
// Concepts: Redux store, actions, reducers, useSelector/useDispatch.
// Features:
// •	- Increment/decrement counters.
// •	- Reset all counters.
// •	- Track total sum of all counters.


function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch() // ✅ get dispatch function once

  return (
    <>
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
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