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
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

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
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/registro">Registro</Link>
          </li>
        </ul>
      </nav>
    </div>

  //   <div className="App">
  // <header className="App-header">
  //     /*<AgregarPlato/>  {/* aca dentro esta la pantalla de carga del logo girando*/
  //     /*<AgregarCategoria/>
  //     <Estadisticas/>
  //     <Home/>
  //     <Inventario/>*/
  //     <Login  data={data}/>
  //     /*<PreguntasFrecuentes/>*/
  //     /*<Registro data={data}/>*/
  //     /*<Suscripcion/>*/
  //   </header>}
  // </div>
  );
}

export default App;