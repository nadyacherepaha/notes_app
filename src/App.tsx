import React from 'react';
import Header from './components/header/Header';
import NotesList from './components/notes-list/NotesList';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <NotesList />
    </div>
  );
};

export default App;
