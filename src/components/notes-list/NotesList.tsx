import { FC } from 'react';
import Note, { IOnDeleteNoteHandler } from '../note/Note';
import './notesList.scss';
import '../note/note.scss';
import { INote } from '../../types/note';

interface INotesList extends IOnDeleteNoteHandler {
	notes: INote[];
}

const NotesList: FC<INotesList> = ({ notes, onDeleteNoteHandler }) => {

	return (
		<div className='notes-list'>
			
			{notes.map((note) => (
				<Note
					key={note.id}
					{...note}
					onDeleteNoteHandler={onDeleteNoteHandler}
				/>
			))}

		</div>
	);
};

export default NotesList;