import "./register.css"

function Register() {
    return (  
        <div className="register-container">
            <h2>Nouveau compte</h2>
    
            <input type="text" className="registeredLastName" placeholder="Nom"></input>
            <input type="text" className="registeredFirstName" placeholder="Prénom"></input>
            <input type="text" className="registeredId" placeholder="Identifiant"></input>
            <input type="text" className="registeredPassWord" placeholder="Mot de passe"></input>

            <button className="registerBtn">Créer compte</button>

        </div>
    );
}

export default Register;