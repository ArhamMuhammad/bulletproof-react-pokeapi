// src/services/api.js
import http from './http';

export const fetchRandomPokemon = async () => {
  const randomId = Math.floor(Math.random() * 150) + 1; // Fetch a random Pokémon
  const data = await http.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
  return data;
};

export const fetchGen1Pokemon = async () => {
  const pokemonPromises = Array.from({ length: 151 }, (_, index) =>
    http.get(`https://pokeapi.co/api/v2/pokemon/${index + 1}`)
  );

  const gen1Pokemon = await Promise.all(pokemonPromises);
  return gen1Pokemon;
};
