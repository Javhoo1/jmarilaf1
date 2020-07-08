import React from 'react';

export default class TurnosForm extends React.Component {
	
render(){
	return(
		
		<table class="egt">
		<tr>
    		<th>Dia Turno</th>
    		<th>Tipo Turno</th>
    		<th>Nombre</th>
    		<th>Rut</th>
        <th>Ocupacion</th>

  		</tr>

  		<tr>
   			<td>Lun-Sab</td>
    		<td>Mañana</td>
    		<td>Juan Camilo Duran Sarmiento</td>
    		<td>15.437.232-1</td>
        <td>Conserje</td>
  		</tr>

  		<tr>
    		<td>Lun-Sab</td>
        <td>Tarde</td>
        <td>Rebecca Tamara Diaz Guzman</td>
        <td>14.633.899-4</td>
        <td>Mantencion</td>

  		</tr>

  		<tr>
    		<td>Lun-Vier</td>
    		<td>Noche</td>
    		<td>Tulio Juan Perez Barrera</td>
    		<td>17.588.231-5</td>
        <td>Conserje</td>

  		</tr>

  		<tr>
    		<td>Sab-Dom</td>
    		<td>Noche</td>
    		<td>Ruben Carrasco Donoso</td>
    		<td>11.234.232-1</td>
        <td>Aseo</td>

  		</tr>
		</table>	
	);	
}

	
}