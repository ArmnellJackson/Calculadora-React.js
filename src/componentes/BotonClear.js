import React from 'react';
import '../style/BotonClear.css';

function BotonClear(props) {
  return (
    <div className='boton-clear' onClick={props.manejarClear}>
        C
    </div>
  )
}

export default BotonClear;