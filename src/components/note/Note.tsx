import React, { FC, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import "./note.scss";
import { INote } from '../../types/note';

export interface IOnDeleteNoteHandler {
	onDeleteNoteHandler: (id: number) => void;
}

interface INoteComponent extends INote, IOnDeleteNoteHandler {}

const Note: FC<INoteComponent> = ({ id, text, date, onDeleteNoteHandler }) => {
  const [notes, setNotes] = useState<string>(text);

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | null>, id: number) => {
		setNotes(e.target.value);
	};

	return (
		<div className='note'>
			<textarea className='note__text'
				value={notes}
				onChange={(e) => handleChange(e, id)}
			/>

		<div className='note__footer'>
				<small>{date}</small>
					<AiFillDelete
						onClick={() => onDeleteNoteHandler(id)}
						size='1.3em'
					/>
				</div>
		</div>
	);
};

export default Note;
