import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./Counter/counterSlice"
import noteReducer from "./Notes/noteSlice"

export default configureStore({
    reducer: {
        counter: counterReducer,
        notes: noteReducer
    },
})