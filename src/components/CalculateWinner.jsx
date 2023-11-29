import React, { useEffect, useState } from 'react'

export default function CalculateWinner({ pokemons }) {
    const [pokemonInTheLead, setPokemonInTheLead] = useState([])
    useEffect(() => {
        pokemons.map((pokemon, index) => {
            return pokemon.voteCount >= pokemon[index - 1].voteCount ? pokemonInTheLead.push(pokemon) : ''
        })
    }, [pokemons])

    console.log(pokemonInTheLead)

  return (
    <>
        {pokemonInTheLead.length === 0 && <div>Start voting!</div>}
        {pokemonInTheLead.length === 1 && <div>{pokemonInTheLead.name} is in the lead with {pokemonInTheLead.voteCount} votes!</div>}
        {pokemonInTheLead.length === 2 && <div>It's a tie between {pokemonInTheLead[0].name} and {pokemonInTheLead[1].name} with {pokemonInTheLead[0].voteCount} votes each!</div>}
        {pokemonInTheLead.length === 3 && <div>It's a tie between {pokemonInTheLead[0].name} and {pokemonInTheLead[1].name} and {pokemonInTheLead[2].name} with {pokemonInTheLead[0].voteCount} votes each!</div>}
    </>
  )
}
