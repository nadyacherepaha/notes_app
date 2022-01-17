import React, { FC } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import './searchInput.scss';

interface ISearchInput {
  onSearchNoteHandler: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: FC<ISearchInput> = ({ onSearchNoteHandler }) => {
	return (
		<div className='search'>
			<BiSearchAlt2 className='search-icon' size='1.3em' />
			<input
        className='serach__input'
				onChange={(event) =>
					onSearchNoteHandler(event.target.value.toLowerCase())
				}
				type='search'
				placeholder='Search...'
			/>
		</div>
	);
};

export default SearchInput;
