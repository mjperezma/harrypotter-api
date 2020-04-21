const ENDPOINT = 'http://hp-api.herokuapp.com/api/characters';

const apiPoter = () => fetch(ENDPOINT).then((response) => response.json());

export {apiPoter};
