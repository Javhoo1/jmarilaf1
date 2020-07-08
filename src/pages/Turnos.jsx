import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Content from '../components/Content';
import TurnosForm from '../containers/TurnosForm';


const links = [
  {href: 'login', title: 'Ingresar'},
  {href: 'register', title: 'Registrarse'},
  {href: 'contact', title: 'Contacto'},
  {href: 'terminos', title: 'Términos y Condiciones'},
  {href: 'trabajadores', title: 'Trabajadores'},
  {href: 'departamentos', title: 'Departamentos'},

];

  export default function Turnos(){
    return(
      <>
      <NavBar links={links} />
      <Content title="Turnos" >
      <TurnosForm />
      </Content>
      <Footer />
      </>
    );
  }
    
