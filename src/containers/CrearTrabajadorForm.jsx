import React from 'react';
import InputLine from '../components/InputLine';
import SelectLine from '../components/SelectLine';
import { validatePassword } from '../utils/validations';
import {Link} from 'react-router-dom';


const ocupaciones = [
  {value: '', label: 'Seleccione...'},
  {value: 'conserje', label: 'Conserje'},
  {value: 'aseo', label: 'Aseo'},
  {value: 'mantencion', label: 'Mantencion'},
  {value: 'administrador', label: 'Administrador'},
]

export default class CrearTrabajadorForm extends React.Component {
  state = {
    crearTrabajadorData: {
      nombre: '',
      rut: '',
      direccion: '',
      ocupacion: ''

    },
    errors: {
      nombre: false,
      rut: false,
      direccion: false,
      ocupacion: false
    }
  };

  doCrearTrabajador = (event) => {
    const { nombre, rut, direccion, ocupacion } = this.state.crearTrabajadorData;
    const nombreError = !validatePassword(nombre);
    const rutError = !validatePassword(rut);
    const direccionError = !validatePassword(direccion);
    const ocupacionError = !validatePassword(ocupacion);

    this.setState({
      errors: {
        nombre: nombreError,
        rut: rutError,
        direccion: direccionError,
        ocupacion: ocupacionError,
      }
    });

    event.preventDefault();
  }

  onChange = (name, event) => {
    const value = event.target.value;
    const crearTrabajadorData = Object.assign({}, this.state.crearTrabajadorData);
    crearTrabajadorData[name] = value;
    this.setState({
      crearTrabajadorData
    });
  }

  render() {
    const { nombre, rut, direccion, ocupacion } = this.state.crearTrabajadorData;
    const { errors } = this.state;

    return (
      <form>
        <InputLine
          name="nombre"
          label="Nombre"
          type="text"
          onChange={this.onChange}
          error={errors.nombre}
          value={nombre}
        />
        <InputLine
          name="rut"
          label="Rut"
          type="text"
          onChange={this.onChange}
          error={errors.rut}
          value={rut}
        />
        <SelectLine
          name="ocupacion"
          label="Ocupacion"
          options={ocupaciones}
          required={true}
          onChange={this.onChange}
          error={errors.ocupacion}
          value={ocupacion}
        />
        <InputLine
          name="direccion"
          label="Direccion"
          type="text"
          onChange={this.onChange}
          error={errors.direccion}
          value={direccion}
        />
        <div className="guardar">
        <button onClick={this.doCrearTrabajador }>Guardar</button>
        <Link to="/Trabajadores" className="link"><button>Volver</button></Link>
        </div>
      </form>
    );
  }
}