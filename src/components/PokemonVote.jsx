import React, { useState } from 'react'
import PokemonInput from './PokemonInput'

export default function PokemonVote({ pokemons, setPokemons }) {

    

    const handleAddVote = (pokemonToChange) => {
        setPokemons(pokemons.map(pokemon => {
            return pokemon.name === pokemonToChange.name ? {...pokemon, voteCount: pokemon.voteCount + 1} : pokemon
        }))
    }

    const onNameChange = (name) => {
        // e.preventDefault()
        if (name === '') return
        
      }

  return (
    <>
        <h2>Display winner here</h2>
        {pokemons?.map(pokemon => (
            <div key={pokemon.name}>
                <h3>{pokemon.name}</h3>
                <button onClick={() => handleAddVote(pokemon)} name='vote'>Vote {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</button>
                <p data-testid='paragraph' name='votes'>
                    <span data-testid={`${pokemon.name}-vote`}>{pokemon.voteCount}</span>
                </p>
                <PokemonInput onNameChange={onNameChange}  />
            </div>
        )) }
    
    </>
  )
}
