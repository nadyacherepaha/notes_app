import React, { FC, useState } from 'react';
import Header from './components/header/Header';
import NotesList from './components/notes-list/NotesList';
import { INote } from './types/note';
import { getRandomNumber, getTags } from './utils';
import getNotes from './redux/selectors/notesSelectors';
import { useAppDispatch, useAppSelector } from './hooks.ts/redux';
import notesSlice from './redux/reducers/notesReducer';

const App: FC = () => {
  const currentDate = new Date().toDateString();
  const notes = useAppSelector(getNotes);
  const dispatch = useAppDispatch();
  const { addNotes, deleteNotes } = notesSlice.actions;
  
  const [value] = useState<INote[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  const handleAddNote = (text: string) => {
    if (value) {
      dispatch(addNotes({
        id: getRandomNumber(4, 150),
		 	  text: text,
		 	  date: currentDate,
      }))
    }
	};

  const handleDeleteNote = (id: number) => {
		dispatch(deleteNotes(id))
	};
   
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header
          darkMode={darkMode}
          onAddNoteHandler={handleAddNote}
          onToggleDarkModeHandler={setDarkMode}
        />
        <NotesList
          notes={notes}
          onDeleteNoteHandler={(id) => handleDeleteNote(id)}
        />
      </div>
    </div>
  );
};

export default App;
