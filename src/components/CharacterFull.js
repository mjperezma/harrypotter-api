import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function CharacterFull(props) {
  console.log(props);

  return (
    <div>
      <h3>{props.name}</h3>
      <FontAwesomeIcon icon='arrow-square-right' />;
    </div>
  );
}

export default CharacterFull;
