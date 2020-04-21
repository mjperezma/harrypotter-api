import React, {Fragment} from 'react';
import Filter from './Filter';
import CharacteresList from './CharacteresList';

const Home = (props) => {
  const {handleSearch, charactersData, value} = props;
  return (
    <Fragment>
      <Filter handleSearch={handleSearch} value={value} />
      <CharacteresList charactersData={charactersData} />
    </Fragment>
  );
};

export default Home;
