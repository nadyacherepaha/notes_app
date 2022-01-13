import { FC } from 'react';
import Note from '../note/Note';
import './notesList.scss';
import { INote } from '../../types/note'

interface INotesList {
	notes: INote[];
}

const NotesList: FC<INotesList> = ({ notes }) => {

	return (
		<div className='notes-list'>
				{notes.map((note) => (
				<Note
					key={note.id}
					{...note}
				/>
			))}

		</div>
	);
};

export default NotesList;