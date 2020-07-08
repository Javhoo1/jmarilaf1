import React from 'react';

export default class DepartamentosTable extends React.Component {
	
render(){
	return(
		
		<table >
		<tr>
    		<th>ID depto</th>
    		<th>Nombre Residente</th>
    		<th>Rut Residente</th>
    		<th>Estacionamiento</th>
        <th>Numero Telefono</th>

  		</tr>

  		<tr>
   			<td>101</td>
    		<td>Juan Camilo Duran Sarmiento</td>
    		<td>15.437.232-1</td>
    		<td>NO</td>
        <td>9 46738954</td>
  		</tr>

  		<tr>
    		<td>102</td>
        <td>Rebecca Tamara Diaz Guzman</td>
        <td>14.633.899-4</td>
        <td>SI</td>
        <td>9 76890345</td>

  		</tr>

  		<tr>
    		<td>103</td>
    		<td>Tulio Juan Perez Barrera</td>
    		<td>17.588.231-5</td>
    		<td>SI</td>
        <td>9 87564304</td>

  		</tr>

  		<tr>
    		<td>104</td>
    		<td></td>
    		<td></td>
    		<td>NO</td>
        <td></td>

  		</tr>
		</table>	
	);	
}

	
}