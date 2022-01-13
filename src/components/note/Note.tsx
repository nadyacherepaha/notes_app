import React, { FC, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import "./note.scss";
import { INote } from '../../types/note';

const Note: FC<INote> = ({ id, text, date }) => {
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
						size='1.3em'
					/>
				</div>
		</div>
	);
};

export default Note;
