import React, { FC } from 'react';
import AddNote, { IOnAddNoteHandler } from '../add-note/AddNote';
import './header.scss';

interface IHeader extends IOnAddNoteHandler {}

const Header: FC<IHeader> = ({ onAddNoteHandler }) => {
	return (
		<div className='header'>
			<h1>Welcome to notes!</h1>
      <AddNote onAddNoteHandler={onAddNoteHandler} />
		</div>
	);
};

export default Header;
