import React from 'react';

export default class TrabajadoresTable extends React.Component {
	
render(){
	return(

		<table class="egt">
		<tr>
    		<th>Nombre</th>
    		<th>Rut</th>
    		<th>Ocupacion</th>
    		<th>Direccion</th>

  		</tr>

  		<tr>
   			<td>Juan Camilo Duran Sarmiento</td>
    		<td>15.437.232-1</td>
    		<td>Conserje</td>
    		<td>Calle Martinez 245</td>
  		</tr>

  		<tr>
    		<td>Rebecca Tamara Diaz Guzman</td>
    		<td>14.633.899-4</td>
    		<td>Aseo</td>
    		<td>Pasaje El Parron 131</td>

  		</tr>

  		<tr>
    		<td>Tulio Juan Perez Barrera</td>
    		<td>17.588.231-5</td>
    		<td>Mantenimiento</td>
    		<td>Av. Soledad 5567</td>

  		</tr>

      <tr>
        <td>Sonia Tamara Salas Guzman</td>
        <td>15.833.000-4</td>
        <td>Administrador</td>
        <td>Pasaje Dos 222</td>

      </tr>

      <tr>
        <td>   </td>
        <td></td>
        <td></td>
        <td></td>

      </tr>

      <tr>
        <td>   </td>
        <td>   </td>
        <td>   </td>
        <td>   </td>

      </tr>
		</table>



	);	
}

	
}