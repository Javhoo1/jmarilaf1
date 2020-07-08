import React from 'react';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Trabajadores from './pages/Trabajadores';
import CrearTrabajador from './pages/CrearTrabajador';
import ModificarTrabajador from './pages/ModificarTrabajador';
import EliminarTrabajador from './pages/EliminarTrabajador';
import Departamentos from './pages/Departamentos';
import ModificarDepartamento from './pages/ModificarDepartamento';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/trabajadores">
          <Trabajadores />
        </Route>
        <Route path="/creartrabajador">
          <CrearTrabajador />
        </Route>
        <Route path="/modificartrabajador">
          <ModificarTrabajador />
        </Route>
        <Route path="/eliminartrabajador">
          <EliminarTrabajador />
        </Route>
        <Route path="/departamentos">
          <Departamentos />
        </Route>
        <Route path="/modificardepartamento">
          <ModificarDepartamento />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
