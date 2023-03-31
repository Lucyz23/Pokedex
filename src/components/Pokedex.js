import React from 'react';
import Pokemon from './Pokemon';
import pokemonList from '../data';

class Pokedex extends React.Component {
  render() {
    return (
      <ul>
        <h1>Pokédex</h1>
        {pokemonList.map((poke, index) => <Pokemon pokemon={ poke } key={ index } />)}
      </ul>
    );
  }
}

export default Pokedex;
