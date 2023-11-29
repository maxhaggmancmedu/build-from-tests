import './App.css';
import Header from './components/Header';
import UserInput from './components/UserInput';
import PokemonVote from './components/PokemonVote';
import { useState } from 'react';
import Footer from './components/Footer';
import CalculateWinner from './components/CalculateWinner';


function App() {
  
  let submittedName = ''
  const onSubmit = (name) => {
    // e.preventDefault()
    submittedName = name
  }

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
    <div className="App">
      <Header />
      <CalculateWinner pokemons={pokemons} />
      <UserInput onSubmit={onSubmit}/>
      <PokemonVote pokemons={pokemons} setPokemons={setPokemons} />
      <Footer />
    </div>
  );
}

export default App;
