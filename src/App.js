import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import UserInput from './components/UserInput';

function App() {
  let submittedName = ''
  const onSubmit = (name) => {
    e.preventDefault()
    submittedName = name
  }

  return (
    <div className="App">
      <Header />
      <UserInput onSubmit={onSubmit}/>
      <Footer />
    </div>
  );
}

export default App;
