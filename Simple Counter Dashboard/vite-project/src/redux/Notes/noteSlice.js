import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  notes: [
    {
      id: 1,
      title: 'Learn React Redux',
      content: 'Study Redux Toolkit basics and implement a small counter app.',
      tags: ['react', 'redux', 'learning'],
    },
    {
      id: 2,
      title: 'Grocery List',
      content: 'Buy milk, eggs, bread, and vegetables.',
      tags: ['personal', 'shopping'],
    },
    {
      id: 3,
      title: 'Project Ideas',
      content: 'Build a note-taking app and integrate authentication.',
      tags: ['ideas', 'projects'],
    },
  ],
  allTags: ['react', 'redux', 'learning', 'personal', 'shopping', 'ideas', 'projects'],
  selectedNote: null,
  filterTag: null,
};


export const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    // Action to completely replace the notes array (used after Firestore snapshot)
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    // Action to completely replace the allTags array (used after Firestore snapshot)
    setAllTags: (state, action) => {
      state.allTags = action.payload;
    },
    // Action to set the note currently being viewed/edited
    setSelectedNote: (state, action) => {
      state.selectedNote = action.payload;
    },
    // Action to set the tag used for filtering
    setFilterTag: (state, action) => {
      state.filterTag = action.payload;
    },
    // Action to clear the selected note (e.g., after saving or cancelling)
    clearSelectedNote: (state) => {
      state.selectedNote = null;
    },
    // Action to clear the filter tag (show all notes)
    clearFilterTag: (state) => {
      state.filterTag = null;
    },
    // Helper action for creating a new, empty note template
    newNote: (state) => {
      state.selectedNote = { title: '', content: '', tags: [] };
    },
  },
})

export const {
  setNotes,
  setAllTags,
  setSelectedNote,
  setFilterTag,
  clearSelectedNote,
  clearFilterTag,
  newNote,
} = noteSlice.actions;

// Export the reducer for the store
export default noteSlice.reducer;