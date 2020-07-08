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
  {href: 'turnos', title: 'Turnos'},
  {href: 'departamentos', title: 'Departamentos'},

];

const modulo = [
    {href: 'creartrabajador', title:'Crear Trabajador'},
    {href: 'modificartrabajador', title:'Modificar Trabajador'},
    {href: 'eliminartrabajador', title:'Eliminar Trabajador'},


]

  export default function Trabajadores(){
    return(
      <>
      <NavBar links={links} />
      
      <Content title="Trabajadores">
        <TrabajadoresTable />
        <NavMenu links ={modulo}/>
      </Content>
      <Footer />
      </>
    );
  }
    
