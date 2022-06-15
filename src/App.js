import logo from './logo.svg';
import './App.css';
import Register from './components/register/register';
import Connexion from './components/connexion/connexion';

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
