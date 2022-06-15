

function Connexion() {
    return ( 
        <div className="connexion-container">
            <h2>Connexion</h2>
            <input type="text" className="connexionId">Identifiant</input>
            <input type="text" className="connexionPassword">Mot de passe</input>
            <a href="#">Pas de compte ?</a>
            <button className="loginBtn">Connexion</button>    
        </div>

    );
}

export default Connexion;