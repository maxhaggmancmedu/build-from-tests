import React, { useEffect, useState } from 'react'
import { usePokemons } from '../context/Pokemons';

export default function CalculateWinner() {
    const [pokemonInTheLead, setPokemonInTheLead] = useState([]);
    const { pokemons } = usePokemons()
    const [startedVoting, setStartedVoting] = useState(false)
    useEffect(() => {
        let leadingPokemon = [];
        let maxVotes = -1;
        
        pokemons.forEach((pokemon) => {
        if (pokemon.voteCount > maxVotes) {
        leadingPokemon = [pokemon];
        maxVotes = pokemon.voteCount;
        } else if (pokemon.voteCount === maxVotes) {
        leadingPokemon.push(pokemon);
        }

        if (pokemonInTheLead.length === 3) {
            for (let i = 0; i < pokemonInTheLead.length; i++) {
                if (pokemonInTheLead[i].voteCount !== 0) {
                    setStartedVoting(true)
                }
            }
        }

    });
    setPokemonInTheLead(leadingPokemon);
    }, [pokemons]);


  return (
    <div>
        {pokemonInTheLead.length === 3 && !startedVoting && <h2>Start voting!</h2>}
        {pokemonInTheLead.length === 1 && <h2>{pokemonInTheLead[0].name} is in the lead with {pokemonInTheLead[0].voteCount} votes!</h2>}
        {pokemonInTheLead.length === 2 && <h2>It's a tie between {pokemonInTheLead[0].name} and {pokemonInTheLead[1].name} with {pokemonInTheLead[0].voteCount} votes each!</h2>}
        {pokemonInTheLead.length === 3 && startedVoting && <h2>It's a tie between {pokemonInTheLead[0].name} and {pokemonInTheLead[1].name} and {pokemonInTheLead[2].name} with {pokemonInTheLead[0].voteCount} votes each!</h2>}
    </div>
  )
}
