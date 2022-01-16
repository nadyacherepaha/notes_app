import React, { Dispatch, FC, SetStateAction } from 'react';
import { MdLightMode, MdModeNight } from "react-icons/md"
import AddNote, { IOnAddNoteHandler } from '../add-note/AddNote';
import './header.scss';

interface IHeader extends IOnAddNoteHandler {
	onToggleDarkModeHandler: Dispatch<SetStateAction<boolean>>;
	darkMode: boolean;
}

const Header: FC<IHeader> = ({ onAddNoteHandler, onToggleDarkModeHandler, darkMode }) => {
	return (
		<div className='header'>
			<h1>Welcome to notes!</h1>

			{darkMode ? 
				<MdModeNight
					onClick={() =>
						onToggleDarkModeHandler(
						(previousDarkMode) => !previousDarkMode
					)}
					className='dark-mode mode-icon'
					color='white'
					size='1.3em'
				/>
			:
				<MdLightMode
					onClick={() =>
						onToggleDarkModeHandler(
						(previousDarkMode) => !previousDarkMode
					)}
					className='mode-icon'
					size='1.3em'
				/>
			}

      <AddNote onAddNoteHandler={onAddNoteHandler} />
		</div>
	);
};

export default Header;
