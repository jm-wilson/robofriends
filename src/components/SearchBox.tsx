import React from 'react';

interface ISearchBoxProps {
  searchChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

const SearchBox: React.FC<ISearchBoxProps> = ({ searchChange }): JSX.Element => {
  return (
    <div className='pa2'>
      <input
        aria-label='search robots'
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
