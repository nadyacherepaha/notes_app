import Note from '../note/Note';
import './notesList.scss'

const NotesList = () => {

	return (
		<div className='notes-list'>
				<Note />
				<Note />
				<Note />
		</div>
	);
};

export default NotesList;