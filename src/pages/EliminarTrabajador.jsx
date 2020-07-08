import React from 'react';
import NavBar from '../components/NavBar';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';
import Content from '../components/Content';
import TrabajadoresTable from '../containers/TrabajadoresTable';


const links = [
  {href: 'login', title: 'Ingresar'},
  {href: 'register', title: 'Registrarse'},
  {href: 'contact', title: 'Contacto'},
  {href: 'trabajadores', title: 'Trabajadores'},
  {href: 'turnos', title: 'Turnos'},
  {href: 'departamentos', title: 'Departamentos'},

];

const modulo = [
  {href: 'trabajadores', title: 'Volver'},
]


  export default function EliminarTrabajador(){
    return(
      <>
      <NavBar links={links} />
      <Content title="Eliminar Trabajador" >
      <TrabajadoresTable />
      <NavMenu links ={modulo}/>

      </Content>
      <Footer />
      </>
    );
  }
    