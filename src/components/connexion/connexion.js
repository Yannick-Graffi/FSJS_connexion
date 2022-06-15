import "./connexion.css"

function Connexion(props) {
    return ( 
        <div className="connexion-container">
            <h2>Connexion</h2>
            <input type="text" className="connexionId" placeholder="Identifiant"></input>
            <input type="text" className="connexionPassword" placeholder="Mot de passe"></input>
            {props.children}
            <button className="loginBtn">Connexion</button>    
        </div>

    );
}

export default Connexion;