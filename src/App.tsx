import React, { useEffect, useState } from 'react';
import Header from './components/header/Header';
import NotesList from './components/notes-list/NotesList';
import initialNotes from "./data/notes.json";
import { INote } from './types/note';
import { getRandomNumber } from './utils';

const App = () => {
  const currentDate = new Date().toDateString();

  const [notes, setNotes] = useState<INote[]>(initialNotes || []);
  const [darkMode, setDarkMode] = useState(false);

  const handleAddNote = (text: string) => {
    const newNote = {
			id: getRandomNumber(4, 150),
			text: text,
			date: currentDate,
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

  const handleDeleteNote = (id: number) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};
   
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header
          darkMode={darkMode}
          onAddNoteHandler={handleAddNote}
          onToggleDarkModeHandler={setDarkMode}
        <NotesList
          notes={notes}
          onDeleteNoteHandler={handleDeleteNote}
        />
      </div>
    </Provider>
    
  );
};

export default App;
