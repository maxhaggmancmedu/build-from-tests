import './App.css';
import Header from './components/Header';
import UserInput from './components/UserInput';
import PokemonVote from './components/PokemonVote';
import { useState } from 'react';
import Footer from './components/Footer';
import CalculateWinner from './components/CalculateWinner';
import { PokemonsContextProvider, usePokemons } from './context/Pokemons';


function App() {
  const [userName, setUserName] = useState('')
  const onSubmit = (name, e) => {
    e.preventDefault()
    setUserName(name)
  }

  return (
    <div className="App">
      <PokemonsContextProvider>
        <Header />
        <CalculateWinner />
        <UserInput onSubmit={onSubmit}/>
        {userName !== '' && <div>Welcome {userName}</div>}
        <PokemonVote />
        <Footer />
      </PokemonsContextProvider>
    </div>
  );
}

export default App;
