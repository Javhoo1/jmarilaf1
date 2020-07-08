import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Content from '../components/Content';
import RegisterForm from '../containers/RegisterForm';


const links = [
  {href: 'login', title: 'Ingresar'},
  {href: 'trabajadores', title: 'Trabajadores'},
  {href: 'contact', title: 'Contacto'},

];


function Register() {
  return (
    <>
      <NavBar links={links} />
      <Content title="Registro">
        <RegisterForm />
      </Content>
      <Footer />
    </>
  );
}

export default Register;
