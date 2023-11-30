import { createContext, useState, useContext } from "react";

export const PokemonsContext = createContext({
    pokemons: [
        {
            id: 1,
            name: 'bulbasaur',
            voteCount: 0
        },
        {
            id: 2,
            name: 'charmander',
            voteCount: 0
        },
        {
            id: 3,
            name: 'squirtle',
            voteCount: 0
        },
    ],
    setPokemons: () => {}
});

export const PokemonsContextProvider = ({ children }) => {
    const [pokemons, setPokemons] = useState([
        {
            id: 1,
            name: 'bulbasaur',
            voteCount: 0
        },
        {
            id: 2,
            name: 'charmander',
            voteCount: 0
        },
        {
            id: 3,
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