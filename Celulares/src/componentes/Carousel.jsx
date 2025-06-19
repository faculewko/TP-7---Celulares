import React, { useState, useEffect } from 'react';
import celuchico from '../assets/celuchico.avif';
import celularnenaso from '../assets/celularnenaso.webp';
import celusatelital from '../assets/celusatelital.webp';
import nokia from '../assets/nokia.webp';

//EL CODIGO ESTA EN INGLES PORQUE SACAMOS EL CARROUSEL DE UNA PAGINA
const images = [
  { src: celuchico, alt: 'Celuchico' },
  { src: celularnenaso, alt: 'Celular Nenaso' },
  { src: celusatelital, alt: 'Celusatelital' },
  { src: nokia, alt: 'Nokia' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div style={styles.carouselContainer}>
      <button onClick={goToPrevious} style={styles.button}>
        &#10094;
      </button>
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        style={styles.image}
      />
      <button onClick={goToNext} style={styles.button}>
        &#10095;
      </button>
    </div>
  );
};

const styles = {
  carouselContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    maxWidth: '600px',
    margin: '2rem auto',
  },
  image: {
    width: '100%',
    maxHeight: '400px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  button: {
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '2rem',
    cursor: 'pointer',
    userSelect: 'none',
    padding: '0 1rem',
    color: '#333',
  },
};

export default Carousel;
