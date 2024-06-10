import React, { useState } from 'react';
import axios from 'axios';

const Registro = () => {
    const [usuario, setUsuario] = useState({
        nombre: '',
        apellido: '',
        nombreUsu: '',
        contraseña: '',
        empresa: '',
    });
    const [mensaje, setMensaje] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario({ ...usuario, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Enviar los datos del formulario al servidor
            const response = await axios.post('http://localhost:3000/api/usuarios', usuario);
            // Verificar si la inserción fue exitosa
            if (response.data.success) {
                setMensaje('Usuario agregado exitosamente');
            } else {
                setMensaje('Error al agregar el usuario');
            }
        } catch (error) {
            console.error('¡Hubo un error!', error);
            setMensaje('Ocurrió un error. Por favor, inténtalo de nuevo más tarde.');
        }
    };

    return (
        <div>
            <h2>Registro de Usuario</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input type="text" name="nombre" value={usuario.nombre} onChange={handleChange} required />
                </div>
                <div>
                    <label>Apellido:</label>
                    <input type="text" name="apellido" value={usuario.apellido} onChange={handleChange} required />
                </div>
                <div>
                    <label>Nombre de Usuario:</label>
                    <input type="text" name="nombreUsu" value={usuario.nombreUsu} onChange={handleChange} required />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input type="password" name="contraseña" value={usuario.contraseña} onChange={handleChange} required />
                </div>
                <div>
                    <label>Empresa:</label>
                    <input type="text" name="empresa" value={usuario.empresa} onChange={handleChange} required />
                </div>
                <button type="submit">Registrar Usuario</button>
            </form>
            {mensaje && <p>{mensaje}</p>}
        </div>
    );
};

export default Registro;