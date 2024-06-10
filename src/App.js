import AgregarPlato from './AgregarPlato';
import AgregarCategoria from './AgregarCategoria';
import Estadisticas from './estadisticas';
import Home from './home';
import Inventario from './Inventario';
import Login from './login';
import PreguntasFrecuentes from './PreguntasFrecuentes';
import Registro from './Registro';
import Suscripcion from './suscripcion';
//import BD
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <AgregarPlato/>
      <AgregarCategoria/>
      <Estadisticas/>
      <Home/>
      <Inventario/>
      <Login/>
      <PreguntasFrecuentes/>
      <Registro/>
      <Suscripcion/>
      </header>
    </div>
  );
}

export default App;