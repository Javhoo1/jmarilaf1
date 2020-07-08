import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Content from '../components/Content';
import LoginForm from '../containers/LoginForm';


const links = [
  {href: 'register', title: 'Registrarse'},
  {href: 'trabajadores', title: 'Trabajadores'},
  {href: 'contact', title: 'Contacto'},

];


function Login() {
  return (
    <>
      <NavBar links={links} />
      <Content title="Iniciar Sesión">
        <LoginForm />
      </Content>
      <Footer />
    </>
  );
}

export default Login;
