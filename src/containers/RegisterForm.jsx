import React from 'react';
import InputLine from '../components/InputLine';
import TextareaLine from '../components/TextareaLine';
import OutputLine from '../components/OutputLine';
import { validateEmail, isEmpty } from '../utils/validations';

export default class RegisterForm extends React.Component {
  state = {
    registerData: {
      email: '',
      password: '',
      confirmation: '',
      nombre: '',
      currentDate: '27/05/2020'
    },
    errors: {
      email: false,
      password: false,
      confirmation: false,
      nombre: false,
      language: false,
    }
  };

  onChange = (name, event) => {
    const value = event.target.value;
    const registerData = Object.assign({}, this.state.registerData);
    registerData[name] = value;
    this.setState({
      registerData
    });
  }

  validateConfirmation = (value, compareValue) => {
    if (this.isEmpty(value)) {
      return false;
    }

    if (value !== compareValue) {
      return false;
    }

    return true;
  }

  doRegister = (event) => {
    const {
      email,
      password,
      confirmation,
      nombre,
    } = this.state.registerData;

    const emailError = !validateEmail(email);
    const passwordError = isEmpty(password);
    const confirmationError = !this.validateConfirmation(confirmation, password);
    const nombreError = isEmpty(nombre);

    this.setState({
      errors: {
        email: emailError,
        password: passwordError,
        confirmation: confirmationError,
        nombre: nombreError,
      }
    });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      confirmation,
      nombre,
      currentDate
    } = this.state.registerData;
    const { errors } = this.state;

    return (
      <form>
        <InputLine
          name="email"
          label="Correo"
          type="email"
          placeholder="correo@ejemplo.cl"
          required={true}
          onChange={this.onChange}
          error={errors.email}
          value={email}
        />
        <InputLine
          name="password"
          label="Contrase&ntilde;a"
          type="password"
          required={true}
          minLength="4"
          maxLength="8"
          onChange={this.onChange}
          error={errors.password}
          value={password}
        />
        <InputLine
          name="confirmation"
          label="Confirmar Contrase&ntilde;a"
          type="password"
          required={true}
          minLength="4"
          maxLength="8"
          onChange={this.onChange}
          error={errors.confirmation}
          value={confirmation}
        />

        <InputLine
          name="nombre"
          label="Nombre"
          type="text"
          onChange={this.onChange}
          error={errors.nombre}
          value={nombre}
        />
        <OutputLine
          name="currentDate"
          label="Fecha de hoy"
          value={currentDate}
        />
        <button onClick={this.doRegister}>Registrarse</button>
      </form>
    );
  }
}
