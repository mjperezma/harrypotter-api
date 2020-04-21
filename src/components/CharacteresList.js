import React from 'react';
import CharacterCard from './CharacterCard';

const CharacteresList = (props) => {
  const dontExist = props.charactersData.length === 0 ? <h3>El personje que buscas no es de Howgwarts ¡Introduce otro distinto!</h3> : '';
  const {charactersData} = props;
  return (
    <main>
      {dontExist}
      <ul className='item--list'>
        {charactersData.map((characterData, index) => (
          <li key={index}>
            <CharacterCard charactersData={characterData} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default CharacteresList;
