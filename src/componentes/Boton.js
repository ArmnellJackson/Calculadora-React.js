import React from 'react';
import '../style/Boton.css';

function Boton(props) {

	const esOperador = valor => {
		// Si no es un numero ni un punto y tampoco el signo de igual, entonces lo consideramos un numero y devuelve true.
		return isNaN(valor) && (valor !== '.') && (valor !== 'C');
	};

	return (
		<div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
		onClick={() => props.manejarClic(props.children)}>
		{props.children}
		</div>
	)
}

export default Boton;