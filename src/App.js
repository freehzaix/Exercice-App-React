import logo from './logo.svg';
import './App.css';
import AppLink from './fonctions/AppLink.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Modifiez le fichier <code>src/App.js</code> et enregistrer votre code.
        </p>
        
        <AppLink/>

      </header>
    </div>
  );
}

export default App;
