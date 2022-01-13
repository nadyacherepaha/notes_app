import React, { useEffect, useState } from 'react';
import Header from './components/header/Header';
import NotesList from './components/notes-list/NotesList';
import initialNotes from "./data/notes.json";
import { INote } from './types/note';

const App = () => {
  const [notes, setNotes] = useState<INote[]>(initialNotes || []);
  return (
    <div className='container'>
      <Header />
    </div>
        <NotesList notes={notes} />
  );
};

export default App;
