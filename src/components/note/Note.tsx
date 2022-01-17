import React, { FC, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import "./note.scss";
import { INote } from '../../types/note';
import { getTags, uniqueValue } from '../../utils';

export interface IOnDeleteNoteHandler {
	onDeleteNoteHandler: (id: number) => void;
}

interface INoteComponent extends INote, IOnDeleteNoteHandler {}

const Note: FC<INoteComponent> = ({ id, text, date, onDeleteNoteHandler }) => {
	const colors = ['#FAFFC7','#E0BBE4','#957DAD','#D291BC','#FFFAB0','#FEC8D8','#FFDFD3','#FF9AA2','#E2F0CB','#B5EAD7','#C7CEEA','#AEE5FA'];
	const randomColor = colors[Math.floor(Math.random() * colors.length)];
	const characterLimit = 250;

  const [notes, setNotes] = useState<string>(text);
	const [color] = useState<string>(randomColor);

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | null>, id: number) => {
		if (characterLimit - e.target.value.length >= 0) {
			setNotes(e.target.value);
		}
	};

	const matchedNotes = notes.toLowerCase().match(getTags);
	const arrayOfUniqueTags = uniqueValue(matchedNotes);

	return (
		<div 
			className='note' 
			style={{backgroundColor:`${color}`}}
		>
			<textarea className='note__text'
				value={notes}
				onChange={(e) => handleChange(e, id)}
			/>

			{matchedNotes ? <div className='tags'> Tags: 
					
				{arrayOfUniqueTags.map((tags, key) => 
					
					<span key={key} className='tags__span'>
						{tags}
					</span>
				)}

				</div> : null}

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
