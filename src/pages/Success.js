import React from "react";

export default function Success(props) {
  return (
    <div>
      <h1>Felicidades {props.info.name}!</h1>
      <p>Ya estas inscrito en {props.info.schedule}</p>
    </div>
  );
}
