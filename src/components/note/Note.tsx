import React, { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import "./note.scss"

const Note = () => {
  const [notes, setNotes] = useState<string>("");

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | null>) => {
		setNotes(e.target.value);
	  };

	return (
		<div className='note'>
			<textarea
				value={notes}
				onChange={(e) => handleChange(e)}
			/>

		<div className='note__footer'>
				<small>13/01/2022</small>
					<AiFillDelete
						size='1.3em'
					/>
				</div>
		</div>
	);
};

export default Note;
