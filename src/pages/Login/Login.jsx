import React, { useState } from "react";
import "./login.scss";

export function Login() {
  const [user, setUser] = useState("");

  function logar() {
    localStorage.setItem("user", user);
    window.location.href = "/home";
  }

  return (
    <div className="loginBoxWrapper">
      <strong>Entre e visualize seus projetos</strong>
      <input
        className="input"
        type="text"
        placeholder="Usuário"
        value={user}
        onChange={e => setUser(e.target.value)}
      />
      <button onClick={logar} className="signInWithGithubButton">
        Entrar
      </button>
    </div>
  );
}
