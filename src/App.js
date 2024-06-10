//import AgregarPlato from './AgregarPlato';
/*import AgregarCategoria from './AgregarCategoria';
import Estadisticas from './estadisticas';
import Home from './home';
import Inventario from './Inventario';*/
import Login from './login';
/*import PreguntasFrecuentes from './PreguntasFrecuentes';*/
//import Registro from './Registro';
/*import Suscripcion from './suscripcion';*/
//import Conexion from '../conexion';
import React, { useState, useEffect } from 'react';
//import connectAndQuery from './dbConnection';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/datos');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  /*useEffect(() => {
    connectAndQuery();
}, []);*/
  return (
    <div className="App">
      <header className="App-header">
      {/*<AgregarPlato/>  {/* aca dentro esta la pantalla de carga del logo girando*/}
      {/*<AgregarCategoria/>
      <Estadisticas/>
      <Home/>
      <Inventario/>*/}
      <Login  data={data}/>
      {/*<PreguntasFrecuentes/>*/}
      {/*<Registro data={data}/>*/}
      {/*<Suscripcion/>*/}
      </header>
    </div>
  );
}

export default App;