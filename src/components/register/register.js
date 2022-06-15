function Register() {
    return (  
        <div className="register-container">
            <h2>Nouveau compte</h2>

            <input type="text" className="registeredLastName">Nom</input>
            <input type="text" className="registeredFirstName">Prénom</input>
            <input type="text" className="registeredId">Identifiant</input>
            <input type="text" className="registeredPassWord">Mot de passe</input>

            <button className="registerBtn">Créer compte</button>

        </div>
    );
}

export default Register;