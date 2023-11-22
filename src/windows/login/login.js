import React, {useState} from "react";
import {connect} from "react-redux";
import {setUsername} from "../../redux/userAction"; // Importez setUsername

import "./login.css";

const Login = ({username, dispatch}) => {
  const [usernameTemp, setUsernameTemp] = useState(username);

  const handleUsernameChange = (e) => {
    setUsernameTemp(e.target.value);
  };

  const handleSaveUsername = () => {
    dispatch(setUsername(usernameTemp)); // Utilisez dispatch pour envoyer l'action
  };

  return (
    <div className="loginContainer">
      <h1>Nom d'utilisateur</h1>
      <input
        type="text"
        placeholder="Nom de la session"
        value={usernameTemp}
        onChange={handleUsernameChange}
      />
      <button onClick={handleSaveUsername}>Sauvegarder</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  username: state.user.username,
});

export default connect(mapStateToProps)(Login);
