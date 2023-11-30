import './App.css';
import Header from './components/Header';
import UserInput from './components/UserInput';
import PokemonVote from './components/PokemonVote';
import { useState } from 'react';
import Footer from './components/Footer';
import { PokemonsContextProvider } from './context/Pokemons';

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
        <UserInput onSubmit={onSubmit}/>
        {userName !== '' && <p className='user-name' data-testid='user-input-display'>Welcome {userName}</p>}
        <PokemonVote />
        <Footer />
      </PokemonsContextProvider>
    </div>
  );
}

export default App;
