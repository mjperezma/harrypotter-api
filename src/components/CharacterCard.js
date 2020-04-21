import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class CharacterCard extends Component {
  render() {
    const {id, name, house, image} = this.props.charactersData;
    return (
      <div id={id} className='item--list-2'>
        <img className='img--list' src={image} alt={name} />

        <div>
          <Link to={`/character/${name}`} className='decoration'>
            <h3 key={id} className='item--list--name '>
              {name}
            </h3>
            <p className='item--list--name'>{house || 'Pure-Blod'}</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default CharacterCard;
