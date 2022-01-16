import { INote } from './../../types/note';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialNotes from '../../data/notes.json'

interface INotes {
  notes: INote[];
}

const initialState: INotes = {
  notes: initialNotes,
};


const sliceNotesName = "notes";

const notesSlice = createSlice({
  name: sliceNotesName,
  initialState,
  reducers: {
    addNotes: (state: INotes, action: PayloadAction<INote>) => {
      state.notes.push(action.payload);

      return state;
    },
    deleteNotes: (state, action) => {
			state.notes = state.notes.filter((note) => note.id !== action.payload);
		},
  },
});

export default notesSlice;
