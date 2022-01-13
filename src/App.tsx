import React, { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';

const Note = () => {
  const [notes, setNotes] = useState<string>("");

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | null>) => {
		setNotes(e.target.value);
	  };

	return (
		<div>
			<textarea
				value={notes}
				onChange={(e) => handleChange(e)}
			/>

		<div>
				<small>13/01/2022</small>
					<AiFillDelete
						size='1.3em'
					/>
				</div>
		</div>
	);
};

export default Note;
