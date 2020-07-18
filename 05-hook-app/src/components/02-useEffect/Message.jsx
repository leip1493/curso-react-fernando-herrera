import React, { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    console.log("Componente message montado");

    return () => {
      console.log("Componente message desmontado");
    };
  }, []);

  return (
    <div>
      <h3>Soy un mensaje!</h3>
    </div>
  );
};
