import { FC, useState } from 'react';
import { IoAddCircleSharp } from 'react-icons/io5';
import '../note/note.scss';
import './addNote.scss';

export interface IOnAddNoteHandler {
  onAddNoteHandler: (text: string) => void;
}

interface IAddNote extends IOnAddNoteHandler {}

const AddNote: FC<IAddNote> = ({ onAddNoteHandler }) => {
	const [noteText, setNoteText] = useState('');
	const characterLimit = 200;

	const handleChangeText = (event: React.ChangeEvent<HTMLTextAreaElement | null>) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			onAddNoteHandler(noteText);
			setNoteText('');
		}
	};

	return (
		<div className='note note__new'>
			<textarea
        className='note__text'
				placeholder='Add notes here :)'
				value={noteText}
				onChange={handleChangeText}
      />
			<div className='note__footer'>
				<small>
					{characterLimit - noteText.length} Remaining
				</small>
				<IoAddCircleSharp
					onClick={handleSaveClick}
					size='1.3em'
				/>
			</div>
		</div>
	);
};

export default AddNote;
