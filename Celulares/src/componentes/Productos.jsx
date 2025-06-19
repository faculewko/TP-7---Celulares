import React from 'react';
import celuchico from '../assets/celuchico.avif';
import celularnenaso from '../assets/celularnenaso.webp';
import celusatelital from '../assets/celusatelital.webp';
import nokia from '../assets/nokia.webp';
import celuminecraft from '../assets/celuminecraft.jpg'

function Productos() {
  const imgStyle = {
    width: '300px',
    height: '300px',
    border: '1px solid gray',
    objectFit: 'cover',
    marginBottom: '0.5rem'
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '2rem'
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Productos</h1>
      <p>Descubre nuestros productos.</p>
      <div>
        <div style={containerStyle}>
          <img src={celuchico} alt="celuchico" style={imgStyle} />
          <p>El celular mas pequeño del mundo, a tan solo 10.000 pesos argentinos. 12 cuotas sin interes. </p>
        </div>
        <div style={containerStyle}>
          <img src={celularnenaso} alt="celularnenaso" style={imgStyle} />
          <p>Un celular infantil con una cantidad incontable de funciones, a tan solo 5000 pesos argentinos. 3 cuotas sin interes.</p>
        </div>
        <div style={containerStyle}>
          <img src={celusatelital} alt="celusatelital" style={imgStyle} />
          <p>Un celular con antena satelital de la mejor calidad, a tan solo 13.000 pesos argentinos. 12 cuotas sin interes.</p>
        </div>
        <div style={containerStyle}>
          <img src={nokia} alt="nokia" style={imgStyle} />
          <p>Un celular Nokia bonito y barato, a tan solo 20.000 pesos argentinos. 12.cuotas sin interes</p>
        </div>
        <div style={containerStyle}>
          <img src={celuminecraft} alt="celuminecraft" style={imgStyle} />
          <p>Un celular minecraft, de los unicos del mercado, a tan solo 100 pesos argentinos. sin cuotas</p>
        </div>
      </div>
    </div>
  );
}

export default Productos;
