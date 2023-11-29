import { createContext, useState, useContext } from "react";

export const PokemonsContext = createContext({
    pokemons: [
        {
            name: 'bulbasaur',
            voteCount: 0
        },
        {
            name: 'charmander',
            voteCount: 0
        },
        {
            name: 'squirtle',
            voteCount: 0
        },
    ],
    setPokemons: () => {}
});

export const PokemonsContextProvider = ({ children }) => {
    const [pokemons, setPokemons] = useState([
        {
            name: 'bulbasaur',
            voteCount: 0
        },
        {
            name: 'charmander',
            voteCount: 0
        },
        {
            name: 'squirtle',
            voteCount: 0
        },
    ])

  return (
    <PokemonsContext.Provider value={{ pokemons, setPokemons }}>
      {children}
    </PokemonsContext.Provider>
  );
};

export const usePokemons = () => {
    const { pokemons, setPokemons } = useContext(PokemonsContext)
    return { pokemons, setPokemons }
}