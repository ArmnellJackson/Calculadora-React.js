import React from 'react';
import '../style/Calculadora.css';
import Boton from './Boton';
import Pantalla from './Pantalla';
import BotonClear from './BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function Calculadora() {

	const [input, setInput] = useState('');

	const agregarInput = valor => {
		setInput(input + valor);
	};

	const calcularResultado = () => {
		if (input) {
			setInput(evaluate(input));
		} else {
			alert('Por favor ingresa valores, para realizar algun cálculo.')
		}
	}

	return (
		<>
			<main>
				<div className='container'>
					<Pantalla input={input} />
					<div className='fila'>
						<Boton manejarClic={agregarInput}>1</Boton>
						<Boton manejarClic={agregarInput}>2</Boton>
						<Boton manejarClic={agregarInput}>3</Boton>
						<Boton manejarClic={agregarInput}>+</Boton>
					</div>

					<div className='fila'>
						<Boton manejarClic={agregarInput}>4</Boton>
						<Boton manejarClic={agregarInput}>5</Boton>
						<Boton manejarClic={agregarInput}>6</Boton>
						<Boton manejarClic={agregarInput}>-</Boton>
					</div>

					<div className='fila'>
						<Boton manejarClic={agregarInput}>7</Boton>
						<Boton manejarClic={agregarInput}>8</Boton>
						<Boton manejarClic={agregarInput}>9</Boton>
						<Boton manejarClic={agregarInput}>*</Boton>
					</div>

					<div className='fila'>
						<BotonClear manejarClear={() => setInput('')} />
						<Boton manejarClic={agregarInput}>0</Boton>
						<Boton manejarClic={agregarInput}>.</Boton>
						<Boton manejarClic={agregarInput}>/</Boton>
					</div>

					<div className='fila'>
						<Boton manejarClic={calcularResultado}>=</Boton>
					</div>
				</div>
			</main>
		</>
	)
}

export default Calculadora;