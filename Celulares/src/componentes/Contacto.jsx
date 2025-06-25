import React from 'react';

function Contacto() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Nuestro contacto</h2>
      <p>+54 11 7036-3456 </p>
      <p>Milewko@gmail.com </p>

    <form>
      <input type="text" name="nombre" placeholder="Nombre" style={{ display: 'block', marginBottom: '1rem', width: '100%' }}></input>
      <input type="text" name="mail" placeholder="Email" style={{ display: 'block', marginBottom: '1rem', width: '100%' }}></input>
      <input type="text" name="Mensaje" placeholder="Mensaje" style={{ display: 'block', marginBottom: '1rem', width: '100%' }}></input>
      <input type="submit" value="Enviar fromulario" style={{ display: 'block', marginBottom: '1rem', width: '100%' }}></input>
    </form>



    </div>
  );
}

export default Contacto;
