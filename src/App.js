import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Tommy" lastName="Brown" age={ 33 }hairColor="Brown"/>
      <PersonCard firstName="Tori" lastName="Green" age={ 22 }hairColor="Blonde"/>
      <PersonCard firstName="Sarah" lastName="Lennon" age={ 88 }hairColor="Blue"/>
      <PersonCard firstName="Grayson" lastName="White" age={ 21 }hairColor="Black"/>
    </div>
  );
}

export default App;
