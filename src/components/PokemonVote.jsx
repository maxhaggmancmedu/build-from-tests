import React, { useState } from "react";
import PokemonInput from "./PokemonInput";
import { usePokemons } from "../context/Pokemons";
import CalculateWinner from "./CalculateWinner";
import { capitalize } from "../utils/capitalize";

export default function PokemonVote() {
  const { pokemons, setPokemons } = usePokemons();

  const handleAddVote = (pokemonToChange) => {
    setPokemons(
      pokemons.map((pokemon) => {
        return pokemon.id === pokemonToChange.id
          ? { ...pokemon, voteCount: pokemon.voteCount + 1 }
          : pokemon;
      }),
    );
  };

  return (
    <>
      <CalculateWinner />
      {pokemons.map((pokemon) => {
        const buttonText = `Vote ${
          pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
        }`;
        return (
          <div key={pokemon.id}>
            <h3>{capitalize(pokemon.name)}</h3>
            <button onClick={() => handleAddVote(pokemon)} name="vote">
              {buttonText}
            </button>
            <p data-testid="paragraph" name="votes">
              <span data-testid={`${pokemon.name}-vote`}>
              Votes: {pokemon.voteCount} 
              </span>
            </p>
            <PokemonInput pokemon={pokemon} />
          </div>
        );
      })}
    </>
  );
}
