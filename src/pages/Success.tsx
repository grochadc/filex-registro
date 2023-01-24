import React from "react";
import { RegisterStudentMutation } from "../generated/grapqhl-types";

type SuccessProps = {
  info: {
    nombre: string;
    group: {
      name: string;
      teacher: string;
      aula: string;
      time: string;
      message?: string | null;
    }
  }
}
const Success = (props: SuccessProps) => {
  const { info } = props;
  return (
    <div>
      <p>
        <strong>Felicidades {info.nombre}!</strong>
      </p>
      <p>
        Ya estas inscrito en el grupo {info.group.name} con el teacher{" "}
        {info.group.teacher}.
      </p>
      <div>
        Aqui tienes los datos de tu clase:
        <p>
          {info.group.aula}{" "}{info.group.time}
        </p>
        {info.group.message ? <p>Un mensaje de tu teacher: <a>{info.group.message}</a></p> : null}
        <p>Clases de Lunes a Jueves</p>
        <p>Inicio de Cursos  de Febrero</p>
      </div>
    </div>
  );
};

export default Success;
