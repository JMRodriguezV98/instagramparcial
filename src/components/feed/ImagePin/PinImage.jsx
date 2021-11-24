import React from 'react';

// Este componente contiene la imagen del pin y el hover de la misma
const PinImage = (props) => {

  // Estos son los estilos propios de la imagen
  const _stylesPinImage = {
    pin_image_card: {
      margin: 0,
      padding: 0,
      display: 'grid',
      gridTemplateColumns: '1fr',
      background:'black',
    },
    small: {
      gridRowEnd: 'span 26',
    },
    medium: {
      gridRowEnd: 'span 33',
    },
    large: {
      gridRowEnd: 'span 55',
    },
    image: {
      margin: 0,
      padding: 0,
      height: '100%',
      width: '100%',
      aspectRatio: 1,
      gridColumn: '1/2',
      gridRow: '1/2',
      zIndex: 0,
    },
    hoverPinImage: {
      width: '100%',
      height: '100%',
      gridColumn: '1/2',
      gridRow: '1/2',
      zIndex: 1,
    },
  };
  return (
    <div
      style={{
        ..._stylesPinImage.pin_image_card,
        ..._stylesPinImage[props.size],
      }}
    >
      <img
        src={props.image}
        style={_stylesPinImage.image}
        alt='img'
      />
    </div>
  );
};

export default PinImage;
