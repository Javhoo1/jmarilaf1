import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Content from '../components/Content';
import CrearTrabajadorForm from '../containers/CrearTrabajadorForm';

const links = [
  {href: 'login', title: 'Ingresar'},
  {href: 'register', title: 'Registrarse'},
  {href: 'contact', title: 'Contacto'},
  {href: 'trabajadores', title: 'Trabajadores'},
  {href: 'turnos', title: 'Turnos'},
  {href: 'departamentos', title: 'Departamentos'},

];

  export default function CrearTrabajador(){
    return(
      <>
      <NavBar links={links} />
      <Content title="Modificar Trabajador" >
      <CrearTrabajadorForm />
      </Content>
      <Footer />
      </>
    );
  }