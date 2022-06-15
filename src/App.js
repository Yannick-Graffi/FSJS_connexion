import './App.css';
import Register from './components/register/register.js';
import Connexion from './components/connexion/connexion.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <section>
        <Connexion>
          <a href="#">Pas de compte ?</a>
        </Connexion>

        <Register />
      </section>
    </div>
  );
}

export default App;
