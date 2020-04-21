import React from 'react';

const Filter = (props) => {
  const handleSearch = (ev) => {
    ev.preventDefault();
    props.handleSearch({
      value: ev.target.value,
    });
  };

  return (
    <form className='container--search'>
      <div className='container--search--div'>
        <label className='title--search' type='text'>
          Shearch your favorite
        </label>
        <input onChange={handleSearch} className='input--search' placeholder='Search your character' type='text' />
        <button className='btn--search'>¡Search!</button>
      </div>
    </form>
  );
};

export default Filter;
