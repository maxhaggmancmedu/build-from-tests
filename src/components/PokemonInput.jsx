import React, { useState } from 'react'
import { usePokemons } from '../context/Pokemons';

export default function PokemonInput({ pokemon }) {
    const [name, setName] = useState('')
    const { setPokemons } = usePokemons()
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (name !== '') {
          setPokemons((prevPokemons) => {
            return prevPokemons.map((poke) =>
              poke.name === pokemon.name ? { ...poke, name: name } : poke
            );
          });
    
          setName('');
        }
      };
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={name} placeholder='Enter new name' onChange={(e) => setName(e.currentTarget.value)}/>
            <button type='submit' name='Change name'>Change Name</button>
        </form>
    )
}
