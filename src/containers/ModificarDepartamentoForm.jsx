import React from 'react';
import InputLine from '../components/InputLine';
import SelectLine from '../components/SelectLine';
import { validatePassword } from '../utils/validations';
import {Link} from 'react-router-dom';


const estacionamientos = [
  {value: '', label: 'Seleccione...'},
  {value: 'si', label: 'SI'},
  {value: 'no', label: 'NO'},
]

export default class ModificarDepartamentoForm extends React.Component {
  state = {
    modificarDepartamentoData: {
      id_depto: '',
      nombre: '',
      rut: '',
      estacionamiento: '',
      numero_telefono: ''

    },
    errors: {
      id_depto: false,
      nombre: false,
      rut: false,
      estacionamiento: false,
      numero_telefono: false

    }
  };

  doModificarTrabajador = (event) => {
    const { id_depto, nombre, rut, estacionamiento, numero_telefono } = this.state.modificarDepartamentoData;
    const id_deptoError = !validatePassword(id_depto);
    const nombreError = !validatePassword(nombre);    
    const rutError = !validatePassword(rut);
    const estacionamientoError = !validatePassword(estacionamiento);
    const numero_telefonoError = !validatePassword(numero_telefono);

    this.setState({
      errors: {
        id_depto: id_deptoError,
        nombre: nombreError,
        rut: rutError,
        estacionamiento: estacionamientoError,
        numero_telefono: numero_telefonoError,
      }
    });

    event.preventDefault();
  }

  onChange = (name, event) => {
    const value = event.target.value;
    const modificarDepartamentoData = Object.assign({}, this.state.modificarDepartamentoData);
    modificarDepartamentoData[name] = value;
    this.setState({
      modificarDepartamentoData
    });
  }

  render() {
    const { id_depto, nombre, rut, estacionamiento, numero_telefono } = this.state.modificarDepartamentoData;
    const { errors } = this.state;

    return (
      <form>
        <InputLine
          name="id_depto"
          label="ID depto"
          type="text"
          onChange={this.onChange}
          error={errors.id_depto}
          value={id_depto}
        />
        <InputLine
          name="nombre"
          label="Nombre Residente"
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
          name="estacionamiento"
          label="Estacionamiento"
          options={estacionamientos}
          required={true}
          onChange={this.onChange}
          error={errors.estacionamiento}
          value={estacionamiento}
        />
        <InputLine
          name="numero_telefono"
          label="Numero Telefono"
          type="text"
          onChange={this.onChange}
          error={errors.numero_telefono}
          value={numero_telefono}
        />
        <div className="guardar">
        <button onClick={this.doModificarTrabajador}>Guardar</button>
        <Link to="/Departamentos" className="link"><button>Volver</button></Link>
        </div>
      </form>
    );
  }
}