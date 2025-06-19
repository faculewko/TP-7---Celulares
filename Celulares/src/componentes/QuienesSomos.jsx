import React from 'react';
import oficinaMilewko from '../assets/oficinaMilewko.jpg';

function QuienesSomos() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Quienes Somos</h2>
      <p>Somos una compañia fundada por Facundo Lewkowicz y Milo Landivar Sosa, con el objetivo de vender celulares al mejor precio y mejor calidad, contamos con 120 empleados actualmente y cada vez nos expandimos mas, proximamente llegaremos a toda latinoamerica.</p>
      <h1>NUESTRAS OFICINAS (100% confiables)</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={oficinaMilewko} alt="oficinaMilewko" />
      </div>
    </div>
  );
}

export default QuienesSomos;
