import React from "react";
import PropTypes from "prop-types";

// const objectToCode = (object= {}) => JSON.stringify(object, null, 3)

const PrimeraApp = ({ saludo, subtitulo }) => {
  return (
    <>
      <h1>{saludo}</h1>
      {/* <pre>{ objectToCode(saludo) }</pre> */}
      <p>{subtitulo}</p>
    </>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired
};

PrimeraApp.defaultProps = {
  subtitulo: "Soy un subtitulo"
};

export default PrimeraApp;
