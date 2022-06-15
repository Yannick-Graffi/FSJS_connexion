import { useState } from "react";
import "./register.css"

function Register() {
    const [memberList, setMemberList] = useState([]);

//? Les fonctions suivantes permettent de récupérer chacun des inputs du formulaire.
    
    //* Pour le nom

    const[registerLastName, setRegisterLastName]= useState("")
    function inputLastName(e){
        setRegisterLastName(e.target.value)
    }

    //* Pour le prénom

    const[registerFirstName, setRegisterFirstName]= useState("")
    function inputFirstName(e){
        setRegisterFirstName(e.target.value)
    }

    //* Pour l'identifiant de connexion

    const[registerLoginID, setRegisterLoginID]= useState("")
    function inputLoginID(e){
        setRegisterLoginID(e.target.value)
    }

    //* Pour le mot de passe

    const[registerPassword, setRegisterPassword]= useState("")
    function inputPassword(e){
        setRegisterPassword(e.target.value)
    }

    function toRegister () {
        let member = {
            lastName: registerLastName,
            firstName: registerFirstName,
            loginID: registerLoginID,
            passWord: registerPassword,        
        };
        
        let newMemberList = memberList.concat(member)
        setMemberList(newMemberList)
        console.log(member);
    }

    return (  
        <div className="register-container">
            <h2>Nouveau compte</h2>
    
            <input type="text" className="registeredLastName" placeholder="Nom" onChange={inputLastName}></input>
            <input type="text" className="registeredFirstName" placeholder="Prénom" onChange={inputFirstName}></input>
            <input type="text" className="registeredId" placeholder="Identifiant"onChange={inputLoginID}></input>
            <input type="text" className="registeredPassword" placeholder="Mot de passe" onChange={inputPassword}></input>

            <button className="registerBtn" onClick={toRegister}>Créer compte</button>

        </div>
    );
}

export default Register;