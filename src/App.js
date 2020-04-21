import React from 'react';
import {Route, Switch} from 'react-router-dom';
import header from './images/header.jpg';
import './App.css';
import logo from './images/logo.png';
import Home from './components/Home';
import {apiPoter} from '../src/services/api';
import CharacterFull from './components/CharacterFull';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      search: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleApp = this.handleApp.bind(this);
    this.filterCharacters = this.filterCharacters.bind(this);
    this.searchApi = this.searchApi.bind(this);
    this.renderDetailFull = this.renderDetailFull.bind(this);
  }

  searchApi() {
    apiPoter().then((data) => {
      this.setState({
        characters: data,
      });
    });
  }
  componentDidMount() {
    this.searchApi();
  }

  handleSearch(data) {
    this.setState({
      search: data.value,
    });
  }

  renderDetailFull(props) {
    const nameId = parseInt(props.match.params.name);
    const character = this.state.characters.find((item) => item.name === nameId);
    if (nameId === undefined) {
      return <p> La personita que buscas no es de Howgarts, ¡busca otro!</p>;
    } else {
      return <CharacterFull character={character} />;
    }
  }

  handleApp() {
    console.log('me hacen click en App, soy el evento de Characteres');
  }

  filterCharacters() {
    return this.state.characters.filter((character) => character.name.toLowerCase().includes(this.state.search.toLowerCase())).filter((character) => character.name.toLowerCase().includes(this.state.search.toLowerCase()));
  }
  render() {
    return (
      <>
        <div className='App'>
          <header className='container--header'>
            <img src={logo} alt={logo} className='header--' />

            <img src={header} alt={header} className='header--img' />
          </header>

          <Switch>
            <Route exact path='/'>
              <Home handleSearch={this.handleSearch} handleApp={this.handleApp} charactersData={this.filterCharacters()} value={this.state.search} />
            </Route>
            <Route path='/character:id' render={this.renderDetailFull} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
