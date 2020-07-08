import React from 'react';
import NavBar from '../components/NavBar';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';
import Content from '../components/Content';
import DepartamentosTable from '../containers/DepartamentosTable';


const links = [
  {href: 'login', title: 'Ingresar'},
  {href: 'register', title: 'Registrarse'},
  {href: 'contact', title: 'Contacto'},
  {href: 'terminos', title: 'Términos y Condiciones'},
  {href: 'trabajadores', title: 'Trabajadores'},
  {href: 'turnos', title: 'Turnos'},

];

const modulo = [
  {href: 'modificardepartamento', title: 'Modificar Departamento'},
]

  export default function Departamentos(){
    return(
      <>
      <NavBar links={links} />
      <Content title="Departamentos" >
      <DepartamentosTable />
      <NavMenu links ={modulo}/>
      </Content>
      <Footer />
      </>
    );
  }

    
