import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ data }) => {
    const [nombreUsu, setNombreUsu] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const user = data.find(user => user.nombreUsu === nombreUsu);
            if (user) {
              if (user.contraseña === contraseña) {
                  setMessage('Inicio de sesión exitoso');
              } else {
                  setMessage('Contraseña incorrecta');
              }
          } else {
              setMessage('Usuario no encontrado');
          }
      } catch (error) {
          console.error('¡Hubo un error!', error);
          setMessage('Ocurrió un error. Por favor, inténtalo de nuevo más tarde.');
      }
  };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={nombreUsu}
                        onChange={(e) => setNombreUsu(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;