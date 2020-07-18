import React, { useEffect, useState } from "react";
import "./effects.css";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: ""
  });

  const { name, email } = formState;

  useEffect(() => {
    console.log("Hey!");
  }, []);

  useEffect(() => {
    console.log("formState cambió");
  }, [formState]);

  useEffect(() => {
    console.log("email cambió");
  }, [email]);

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          autoComplete="off"
          placeholder="Nombre"
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          autoComplete="off"
          placeholder="Correo"
          value={email}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};
