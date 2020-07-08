import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Content from '../components/Content';
import ModificarDepartamentoForm from '../containers/ModificarDepartamentoForm';


const links = [
  {href: 'login', title: 'Ingresar'},
  {href: 'register', title: 'Registrarse'},
  {href: 'contact', title: 'Contacto'},
  {href: 'trabajadores', title: 'Trabajadores'},
  {href: 'turnos', title: 'Turnos'},
  {href: 'departamentos', title: 'Departamentos'},

];

  export default function ModificarDepartamento(){
    return(
      <>
      <NavBar links={links} />
      <Content title="Modificar Departamento" >
      <ModificarDepartamentoForm />
      </Content>
      <Footer />
      </>
    );
  }