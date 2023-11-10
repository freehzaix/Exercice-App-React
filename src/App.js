import logo from './logo.svg';
import logoBlue from './logoBlue.svg';
import './App.css';
import AppLink from './fonctions/AppLink.js';
import Logo from './fonctions/Logo.js';

function App() {
  const handleOnClick = (svg) => {
    const logo = document.getElementById("logo")
    logo.src = svg
  }
  return (
    <div className="App">
      <header className="App-header">
        <Logo svg={logo} />
        
        <AppLink/>

        <p>
          <button onClick={() => handleOnClick(logo)}> Rouge </button>
          <button onClick={() => handleOnClick(logoBlue)}> Bleu </button>
        </p>

      </header>
    </div>
  );
}

export default App;
