import React from 'react';
import ImgReact from '../img/react-js-logo-removebg-preview.png';
import '../style/LogoReact.css';

function LogoReact() {
  return (
    <div className='logo-react'>
        <img src={ImgReact} alt='logo de react.js' />
    </div>
  )
}

export default LogoReact;